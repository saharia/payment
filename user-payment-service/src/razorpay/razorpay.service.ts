import { 
  RazorpayEntity,
  PaymentInput,
  PaymentGatewayKey,
  UserPaymentResponse,
  PaymentMode,
  PaymentType
} from '@brightauto/api-models';
import { HttpException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Razorpay } from 'razorpay-typescript';
import { IRazorOrderId } from 'razorpay-typescript/dist/resources/order';
import { Repository } from 'typeorm';
import { RazorpaySubscriptionService } from './razorpay-subscription.service';

@Injectable()
export class RazorpayService {

  constructor(
    private razorpaySubscriptionService: RazorpaySubscriptionService
  ) {

  }

  @InjectRepository(RazorpayEntity)
  private readonly paypal: Repository<RazorpayEntity>;

  async auth(url, clientId, clientSecret): Promise<Razorpay> {
    try {
      const instance: Razorpay = new Razorpay({
        authKey: {
          key_id: clientId,
          key_secret: clientSecret, 
        },
      });
      return instance;
    } catch (error) {
      console.log("razorpay auth error ==>", error.message);
      throw error;
    }
  }
  
  async initiatePayment(paymentInput: PaymentInput, paymentGatewayKeyEntity: PaymentGatewayKey): Promise<UserPaymentResponse> {
    try {
      const paymentGateway = paymentGatewayKeyEntity.paymentGateway
      let url = paymentGateway.apiSandboxPaymentUrl;
      if(paymentInput.paymentMode == PaymentMode.LIVE) {
        url = paymentGateway.apiPaymentUrl;
      }
      const razorPayClient = await this.auth(url, paymentGatewayKeyEntity.clientId, paymentGatewayKeyEntity.clientSecret);

      /* One time payment */
      if(paymentInput.paymentType == PaymentType.ONETIME) {
        return await this.createOrder(paymentInput, razorPayClient);
      } else if(paymentInput.paymentType == PaymentType.SUBSCRIBE) {
        return await this.razorpaySubscriptionService.subscribe(paymentInput, razorPayClient);
      }
    } catch (error) {
      console.log("razorpay initiatePayment error ==>", error.message);
      if(error.error) {
        throw new HttpException(error.error, error.statusCode, { cause: error.error, description: error.error.description });
      } else {
        throw new RpcException(error.message);
      }
    }
  }

  async createOrder(paymentInput: PaymentInput, razorPayClient: Razorpay): Promise<UserPaymentResponse> {
    try {
      const order: IRazorOrderId = await razorPayClient.orders.create({
        amount: paymentInput.amount,
        currency: paymentInput.currency,
        /* receipt: "receipt#1",
        notes: {
          key1: "value3",
          key2: "value2"
        } */
      });
      return {
        data: order
      }
    } catch (error) {
      console.log("razorpay createOrder error ==>", error);
      throw error;
    }
  }

}
