import { ColumnExistsRule, NatMicroServiceModule, StripeEntity } from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StripeSubscriptionService } from './stripe-subscription.service';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  imports: [
    NatMicroServiceModule,
    TypeOrmModule.forFeature([
      StripeEntity,
    ])
  ],
  controllers: [StripeController],
  providers: [
    StripeService,
    StripeSubscriptionService,
    ColumnExistsRule
  ]
})
export class StripeModule {}
