import { 
  CreatePaymentPlanInput,
  PaymentPlan,
  UpdatePaymentPlanInput,
  RemovePaymentPlanInput,
  RemoveResponse,
  FindPaymentPlanInput
} from '@brightauto/api-models';
import { Controller, ExecutionContext } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentPlanService } from './payment-plan.service';

@Controller()
export class PaymentPlanController {
  
  constructor(private readonly roleService: PaymentPlanService) {}

  @MessagePattern('paymentPlan.create')
  create(@Payload('data') createPaymentPlanInput: CreatePaymentPlanInput, @Ctx() context: ExecutionContext): Promise<PaymentPlan> {
    return this.roleService.create(createPaymentPlanInput);
  }

  @MessagePattern('paymentPlan.update')
  update(@Payload('data') updatePaymentPlanInput: UpdatePaymentPlanInput): Promise<PaymentPlan> {
    return this.roleService.update(updatePaymentPlanInput);
  }

  @MessagePattern('paymentPlan.remove')
  async remove(@Payload('data') removePaymentPlanInput: RemovePaymentPlanInput): Promise<RemoveResponse> {
    await this.roleService.remove(removePaymentPlanInput);
    return new RemoveResponse();
  }

  @MessagePattern('paymentPlan.findOne')
  findOne(@Payload('data') findPaymentPlanInput: FindPaymentPlanInput): Promise<PaymentPlan> {
    return this.roleService.findOne(findPaymentPlanInput);
  }

  @MessagePattern('paymentPlan.findAll')
  findAll(): Promise<PaymentPlan[]> {
    return this.roleService.findAll();
  }
}
