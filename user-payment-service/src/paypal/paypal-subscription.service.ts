import { 
  Paypal, 
  PaymentInput, 
  UserPaymentResponse
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';

@Injectable()
export class PaypalSubscriptionService {

  @InjectRepository(Paypal)
  private readonly paypal: Repository<Paypal>;

  async subscribe(url: string, paymentInput: PaymentInput, token: string): Promise<UserPaymentResponse> {
    try {
      const product = await this.createProduct(url, paymentInput, token);
      const plan = await this.createPlan(url, paymentInput, token, product);
      const subscription = await this.createSubscription(url, paymentInput, token, plan);
      return {
        data: subscription
      }
    } catch (error) {
      console.log("paypal subscription error ==>", error.message);
      throw error;
    }
  }

  async createProduct(url: string, paymentInput: PaymentInput, token: string): Promise<any> {
    try {
      const data = JSON.stringify({
        "name": paymentInput.name,
        "type": paymentInput.paypalSubscription.type,
        "description": paymentInput.paypalSubscription.description,
      });
      var config = {
        method: 'post',
        url: `${url}v1/catalogs/products`,
        headers: { 
          'Content-Type': 'application/json', 
          'Prefer': 'return=representation', 
          // 'PayPal-Request-Id': '07637366-9e5a-409c-8e44-167cf1f97ac2', 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      const response = await axios(config);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("paypal createProduct error ==>", error.message);
      throw error;
    }
  }

  async createPlan(url: string, paymentInput: PaymentInput, token: string, product: any): Promise<any> {
    try {
      console.log("paypal product id -->", product.id);
      const interval = {
        daily: 'day',
        weekly: 'week',
        monthly: 'month',
        yearly: 'year',
      };
      const intervalUnit = paymentInput.paypalSubscription.billingCycles.frequency.intervalUnit;
      const data = JSON.stringify({
        "product_id": product.id,
        "name": paymentInput.name,
        "description": paymentInput.paypalSubscription.description,
        "status": "ACTIVE",
        "billing_cycles": [
          {
            "frequency": {
              "interval_unit": interval[intervalUnit.toLowerCase()],
              "interval_count": paymentInput.paypalSubscription.billingCycles.frequency.intervalCount
            },
            "tenure_type": "REGULAR",
            "sequence": 1,
            "total_cycles": paymentInput.paypalSubscription.billingCycles.totalCycles,
            "pricing_scheme": {
              "fixed_price": {
                "value": paymentInput.paypalSubscription.billingCycles.price.value,
                "currency_code": paymentInput.paypalSubscription.billingCycles.price.currency
              }
            }
          }
        ],
        "payment_preferences": {
          "auto_bill_outstanding": paymentInput.paypalSubscription.paymentPreferences.autoBillOutstanding,
          "setup_fee": {
            "value": paymentInput.paypalSubscription.paymentPreferences.setupFee.value,
            "currency_code": paymentInput.paypalSubscription.paymentPreferences.setupFee.currency
          },
          "setup_fee_failure_action": paymentInput.paypalSubscription.paymentPreferences.setupFeeFailureAction,
          "payment_failure_threshold": paymentInput.paypalSubscription.paymentPreferences.paymentFailureThreshold
        },
        "taxes": {
          "percentage": paymentInput.paypalSubscription.taxes.percentage,
          "inclusive": paymentInput.paypalSubscription.taxes.inclusive
        }
      });
      // token += '12';
      var config = {
        method: 'post',
        url: `${url}v1/billing/plans`,
        headers: { 
          'Content-Type': 'application/json', 
          'Prefer': 'return=representation', 
          // 'PayPal-Request-Id': '07637366-9e5a-409c-8e44-167cf1f97ac2', 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      const response = await axios(config);
      // console.log(response);
      return response.data
    } catch (error) {
      console.log("paypal createPlan error ==>", error.message);
      throw error;
    }
  }

  async createSubscription(url: string, paymentInput: PaymentInput, token: string, plan: any): Promise<any> {
    try {
      const data = JSON.stringify({
        "plan_id": plan.id,
        "application_context": {
          "return_url": "https://example.com/return",
          "cancel_url": "https://example.com/cancel"
        }
      });
      // token += '12';
      var config = {
        method: 'post',
        url: `${url}v1/billing/subscriptions`,
        headers: { 
          'Content-Type': 'application/json', 
          'Prefer': 'return=representation', 
          // 'PayPal-Request-Id': '07637366-9e5a-409c-8e44-167cf1f97ac2', 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      const response = await axios(config);
      // console.log(response);
      return { data: response.data };
    } catch (error) {
      console.log("paypal createsubscription error ==>", error.message);
      throw error;
    }
  }

}
