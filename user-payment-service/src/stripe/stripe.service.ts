import { 
  StripeEntity,
  PaymentInput,
  PaymentGatewayKey,
  PaymentMode,
  PaymentType
} from '@brightauto/api-models';
import { HttpException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Stripe } from 'stripe';
import { Repository } from 'typeorm';
import { StripeSubscriptionService } from './stripe-subscription.service';

@Injectable()
export class StripeService {

  constructor(
    private stripeSubscriptionService: StripeSubscriptionService
  ) {

  }
  @InjectRepository(StripeEntity)
  private readonly paypal: Repository<StripeEntity>;

  async auth(url, clientId, clientSecret): Promise<Stripe> {
    try {
      console.log(clientId)
      const instance = new Stripe(clientSecret, {
        apiVersion: "2022-11-15"
      });
      return instance;
    } catch (error) {
      console.log("stripe auth error ==>", error);
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
      const stripeClient = await this.auth(url, paymentGatewayKeyEntity.clientId, paymentGatewayKeyEntity.clientSecret);

      /* One time payment */
      if(paymentInput.paymentType == PaymentType.ONETIME) {
        return await this.createOrder(paymentInput, stripeClient);
      } else if(paymentInput.paymentType == PaymentType.SUBSCRIBE) {
        return await this.stripeSubscriptionService.subscribe(paymentInput, stripeClient);
      }
    } catch (error) {
      console.log("stripe initiatePayment error ==>", error.response);
      if(error.raw) {
        throw new HttpException({ code: error.raw.code, message : error.raw.message, type: error.raw.type }, error.statusCode, { cause: error.error, description: error.raw.message });
      } else {
        throw new RpcException(error.message);
      }
    }
  }

  async createOrder(paymentInput: PaymentInput, stripeClient: Stripe) {
    try {
      const order = await stripeClient.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              product_data: {
                name: paymentInput.name,
              },
              unit_amount: paymentInput.amount * 100,
              currency: paymentInput.currency
            },
            quantity: 1
          }
        ],
        mode: "payment",
        success_url: "http://www.example.com/success",
        cancel_url: "http://www.example.com/success"
      });
      return {
        data: order
      }
    } catch (error) {
      console.log("stripe createOrder error ==>", error.message);
      throw error;
    }
  }

}
