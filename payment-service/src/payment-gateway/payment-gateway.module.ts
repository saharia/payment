import { 
  AuthGuardMicroServiceModule,
  NatMicroServiceModule,
  PaymentGateway,
  PaymentGatewayPlan,
  RelationExistsRule,
  UniqueArrayObjectsRule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentGatewayController } from './payment-gateway.controller';
import { PaymentGatewayService } from './payment-gateway.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthGuardMicroServiceModule,
    TypeOrmModule.forFeature([
      PaymentGateway,
      PaymentGatewayPlan
    ])
  ],
  controllers: [PaymentGatewayController],
  providers: [
    PaymentGatewayService,
    UniqueArrayObjectsRule,
    RelationExistsRule
  ]
})
export class PaymentGatewayModule {}
