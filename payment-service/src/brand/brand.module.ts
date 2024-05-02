import {
  AuthGuardMicroServiceModule,
  Brand,
  ColumnExistsRule, 
  NatMicroServiceModule, 
  PaymentGateway,
  PaymentGatewayKey,
  PaymentPlan,
  RelationExistsRule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthGuardMicroServiceModule,
    TypeOrmModule.forFeature([
      Brand,
      PaymentGatewayKey,
      PaymentPlan,
      PaymentGateway
    ])
  ],
  controllers: [BrandController],
  providers: [
    BrandService,
    ColumnExistsRule,
    RelationExistsRule
  ]
})
export class BrandModule {}
