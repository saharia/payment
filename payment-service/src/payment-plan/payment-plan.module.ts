import { 
  AuthGuardMicroServiceModule,
  ColumnExistsRule,
  NatMicroServiceModule,
  PaymentPlan,
  RelationExistsRule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentPlanController } from './payment-plan.controller';
import { PaymentPlanService } from './payment-plan.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthGuardMicroServiceModule,
    TypeOrmModule.forFeature([
      PaymentPlan,
    ])
  ],
  controllers: [PaymentPlanController],
  providers: [
    PaymentPlanService,
    ColumnExistsRule,
    RelationExistsRule
  ]
})
export class PaymentPlanModule {}
