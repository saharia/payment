import {
  PaymentGatewayPlan,
} from '@brightauto/api-models';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentGatewayPlanService } from './payment-gateway-plan.service';

@Controller()
export class PaymentGatewayPlanController {
  
  constructor(private readonly paymentGatewayPlanService: PaymentGatewayPlanService) {}

  @MessagePattern('paymentGatewayPlan.findAll')
  findAll(): Promise<PaymentGatewayPlan[]> {
    return this.paymentGatewayPlanService.findAll();
  }
}
