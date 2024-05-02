import { 
  RazorpayEntity,
  PaymentInput,
  UserPaymentResponse
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Razorpay } from 'razorpay-typescript';
import { IRazorAddPlan, IRazorPlanId } from 'razorpay-typescript/dist/resources/plans';
import { IRazorSubscription, IRazorSubscriptionId } from 'razorpay-typescript/dist/resources/subscriptions';
import { Repository } from 'typeorm';

@Injectable()
export class RazorpaySubscriptionService {

  @InjectRepository(RazorpayEntity)
  private readonly paypal: Repository<RazorpayEntity>;

  async subscribe(paymentInput: PaymentInput, razorPayClient: Razorpay): Promise<UserPaymentResponse> {
    try {
      const plan: IRazorPlanId = await this.createPlan(paymentInput, razorPayClient);
      const subscription: IRazorSubscription = await this.createSubscription(paymentInput, razorPayClient, plan);
      return {
        data: subscription
      }
    } catch (error) {
      console.log("razorpay subscription error ==>", error.message);
      throw error;
    }
  }

  async createPlan(paymentInput: PaymentInput, razorPayClient: Razorpay): Promise<IRazorPlanId> {
    try {
      // const period = "daily";
      const period: IRazorAddPlan["period"] = paymentInput.razorpaySubscription.period.toLowerCase() as IRazorAddPlan["period"];
      return await razorPayClient.plans.create({
        period,
        interval: paymentInput.razorpaySubscription.interval,
        item: {
          name: paymentInput.name,
          amount: paymentInput.razorpaySubscription.amount * 100,
          currency: paymentInput.razorpaySubscription.currency,
          description: paymentInput.razorpaySubscription.description
        },
        notes: {
          test: "1122"
        }
      });
    } catch (error) {
      console.log("razorpay createPlan error ==>", error);
      throw error;
    }
  }

  async createSubscription(paymentInput: PaymentInput, razorPayClient: Razorpay, plan: IRazorPlanId): Promise<IRazorSubscriptionId> {
    try {
      const customerNotify = paymentInput.razorpaySubscription.customerNotify ? 1 : 0;
      return await razorPayClient.subscriptions.create({
        plan_id: plan.id,
        total_count: paymentInput.razorpaySubscription.totalCount || 0,
        customer_notify: customerNotify,
        quantity: paymentInput.razorpaySubscription.totalCount || 0,
      });
    } catch (error) {
      console.log("razorpay createSubscription error ==>", error.message);
      throw error;
    }
  }

}
