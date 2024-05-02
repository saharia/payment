import { 
  AuthGuardMicroServiceModule,
  Brand,
  ColumnExistsRule,
  NatMicroServiceModule,
  PaymentGateway,
  PaymentGatewayKey,
  Paypal,
  RazorpayEntity,
  RelationExistsRule,
  StripeEntity,
  WidgetValidateIfRule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthGuardMicroServiceModule,
    TypeOrmModule.forFeature([
      Paypal,
      Brand,
      RazorpayEntity,
      StripeEntity,
      PaymentGatewayKey,
      PaymentGateway
    ])
  ],
  controllers: [WidgetController],
  providers: [
    WidgetService,
    ColumnExistsRule,
    WidgetValidateIfRule,
    RelationExistsRule
  ]
})
export class WidgetModule {}
