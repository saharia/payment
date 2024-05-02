import { 
  StripeEntity,
  PaymentInput,
  UserPaymentResponse
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stripe } from 'stripe';
import { Repository } from 'typeorm';

@Injectable()
export class StripeSubscriptionService {

  @InjectRepository(StripeEntity)
  private readonly paypal: Repository<StripeEntity>;

  
  async subscribe(paymentInput: PaymentInput, stripeClient: Stripe): Promise<UserPaymentResponse> {
    try {
      const product: Stripe.Product = await this.createProduct(paymentInput, stripeClient);
      const price: Stripe.Price = await this.createPrice(paymentInput, stripeClient, product);
      const subscription: Stripe.Checkout.Session = await this.createSubscription(paymentInput, stripeClient, price);
      return {
        data: subscription
      }
    } catch (error) {
      console.log("stripe subscription error ==>", error.message);
      throw error;
    }
  }

  async createProduct(paymentInput: PaymentInput, stripeClient: Stripe): Promise<Stripe.Product> {
    try {
      return await stripeClient.products.create({
        name: paymentInput.name,
        metadata: {
          brand_id: paymentInput.primaryBrandId
        }
      });
    } catch (error) {
      console.log("stripe createProduct error ==>", error.message);
      throw error;
    }
  }

  async createPrice(paymentInput: PaymentInput, stripeClient: Stripe, product: Stripe.Product): Promise<Stripe.Price> {
    try {
      const interval = {
        daily: 'day',
        weekly: 'week',
        monthly: 'month',
        yearly: 'year',
      };
      return await stripeClient.prices.create({
        unit_amount: paymentInput.stripeSubscription.amount * 100,
        currency: paymentInput.stripeSubscription.currency,
        recurring: {
          interval: interval[paymentInput.stripeSubscription.interval.toLowerCase()],
          interval_count: paymentInput.stripeSubscription.intervalCount
        },
        product: product.id,
      });
    } catch (error) {
      console.log("stripe createOPrice error ==>", error.message);
      throw error;
    }
  }

  async createSubscription(paymentInput: PaymentInput, stripeClient: Stripe, price: Stripe.Price): Promise<Stripe.Checkout.Session> {
    try {
      return await stripeClient.checkout.sessions.create({
        line_items: [
          {
            price: price.id,
            quantity: 1
          }
        ],
        mode: "subscription",
        success_url: paymentInput.returnUrl,
        cancel_url: paymentInput.returnUrl
      });
    } catch (error) {
      console.log("stripe createSubscription error ==>", error.message);
      throw error;
    }
  }

}
