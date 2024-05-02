import { 
  AuthGuardMicroServiceModule,
  NatMicroServiceModule,
  PaymentGatewayPlan,
  PaymentPlan,
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentGatewayPlanController } from './payment-gateway-plan.controller';
import { PaymentGatewayPlanService } from './payment-gateway-plan.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthGuardMicroServiceModule,
    TypeOrmModule.forFeature([
      PaymentPlan,
      PaymentGatewayPlan
    ])
  ],
  controllers: [PaymentGatewayPlanController],
  providers: [
    PaymentGatewayPlanService,
  ]
})
export class PaymentGatewayPlanModule {}
