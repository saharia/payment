import { 
  Paypal,
  Brand,
  RazorpayEntity,
  StripeEntity,
  PaymentGatewayKey,
  PaymentGateway,
  ColumnExistsRule,
  RelationExistsRule,
  PaymentValidateIfRule,
  BrandGatewayExistsRule,
  NatMicroServiceModule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaypalSubscriptionService } from '../paypal/paypal-subscription.service';
import { PaypalService } from '../paypal/paypal.service';
import { RazorpaySubscriptionService } from '../razorpay/razorpay-subscription.service';
import { RazorpayService } from '../razorpay/razorpay.service';
import { StripeSubscriptionService } from '../stripe/stripe-subscription.service';
import { StripeService } from '../stripe/stripe.service';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    NatMicroServiceModule,
    TypeOrmModule.forFeature([
      Paypal,
      Brand,
      RazorpayEntity,
      StripeEntity,
      PaymentGatewayKey,
      PaymentGateway
    ])
  ],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaypalService,
    RazorpayService,
    StripeService,
    StripeSubscriptionService,
    RazorpaySubscriptionService,
    PaypalSubscriptionService,
    ColumnExistsRule,
    RelationExistsRule,
    PaymentValidateIfRule,
    BrandGatewayExistsRule
  ]
})
export class PaymentModule {}
