import { 
  Paypal, 
  PaymentInput, 
  PaymentGatewayKey, 
  PaymentMode, 
  PaymentType
} from '@brightauto/api-models';
import { HttpException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as qs from 'qs';
import { Repository } from 'typeorm';
import { PaypalSubscriptionService } from './paypal-subscription.service';

@Injectable()
export class PaypalService {

  constructor(
    private paypalSubscriptionService: PaypalSubscriptionService
  ) {

  }

  @InjectRepository(Paypal)
  private readonly paypal: Repository<Paypal>;

  async auth(url, clientId, clientSecret) {
    try {
      const data = qs.stringify({
        'grant_type': 'client_credentials',
        'ignoreCache': 'true',
        'return_authn_schemes': 'true',
        'return_client_metadata': 'true',
        'return_unconsented_scopes': 'true' 
      });
      const authValue = `${clientId}:${clientSecret}`;
      console.log(url, clientId, clientSecret, Buffer.from(authValue).toString('base64'), data);
      const headers = {
        Authorization: `Basic ${Buffer.from(authValue).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      const config = {
        method: 'post',
        url: `${url}v1/oauth2/token`,
        headers,
        data
      };
      return await axios(config);
    } catch (error) {
      console.log("paypal auth error ==>", error.message);
      throw error;
    }
  }
  
  async initiatePayment(paymentInput: PaymentInput, paymentGatewayKeyEntity: PaymentGatewayKey): Promise<any> {
    try {
      const paymentGateway = paymentGatewayKeyEntity.paymentGateway
      let url = paymentGateway.apiSandboxPaymentUrl;
      if(paymentInput.paymentMode == PaymentMode.LIVE) {
        url = paymentGateway.apiPaymentUrl;
      }
      const authResponse = await this.auth(url, paymentGatewayKeyEntity.clientId, paymentGatewayKeyEntity.clientSecret);

      /* One time payment */
      if(paymentInput.paymentType == PaymentType.ONETIME) {
        return await this.createOrder(url, paymentInput, authResponse.data.access_token);
      } else if(paymentInput.paymentType == PaymentType.SUBSCRIBE) {
        return await this.paypalSubscriptionService.subscribe(url, paymentInput, authResponse.data.access_token);
      }
    } catch (error) {
      console.log("paypal initiatePayment error ==>", error.message);
      // throw error;
      if(error.response) {
        throw new HttpException(error.response.data, error.response.status, { cause: error.response.data, description: error.response.statusText });
      } else {
        console.log("Rpc")
        throw new RpcException(error.message);
      }
    }
  }

  async createOrder(url, paymentInput, token) {
    try {
      const data = JSON.stringify({
        "intent": "CAPTURE",
        "purchase_units": [
          {
            "amount": {
              "currency_code": paymentInput.currency,
              "value": paymentInput.amount,
            }
          }
        ],
        "application_context": {
          "return_url": 'http://localhost/graphql/success',
          "cancel_url": "http://localhost/graphql/cancel"
        }
      });
      console.log(token, data);
      // token += '12';
      var config = {
        method: 'post',
        url: `${url}v2/checkout/orders`,
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
      console.log("paypal createOrder error ==>", error.message);
      throw error;
    }
  }

}
