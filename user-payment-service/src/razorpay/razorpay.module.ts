import { ColumnExistsRule, NatMicroServiceModule, RazorpayEntity } from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RazorpaySubscriptionService } from './razorpay-subscription.service';
import { RazorpayController } from './razorpay.controller';
import { RazorpayService } from './razorpay.service';

@Module({
  imports: [
    NatMicroServiceModule,
    TypeOrmModule.forFeature([
      RazorpayEntity,
    ])
  ],
  controllers: [RazorpayController],
  providers: [
    RazorpayService,
    RazorpaySubscriptionService,
    ColumnExistsRule
  ]
})
export class RazorpayModule {}
