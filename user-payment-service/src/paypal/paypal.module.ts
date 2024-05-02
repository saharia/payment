import { ColumnExistsRule, NatMicroServiceModule, Paypal } from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaypalSubscriptionService } from './paypal-subscription.service';
import { PaypalController } from './paypal.controller';
import { PaypalService } from './paypal.service';

@Module({
  imports: [
    NatMicroServiceModule,
    TypeOrmModule.forFeature([
      Paypal,
    ])
  ],
  controllers: [PaypalController],
  providers: [
    PaypalService,
    PaypalSubscriptionService,
    ColumnExistsRule
  ]
})
export class PaypalModule {}
