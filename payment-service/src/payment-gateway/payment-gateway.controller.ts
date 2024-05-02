import { 
  CreatePaymentGatewayInput,
  PaymentGateway,
  UpdatePaymentGatewayInput,
  RemovePaymentGatewayInput,
  RemoveResponse,
  FindPaymentGatewayInput
} from '@brightauto/api-models';
import { Controller, ExecutionContext } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentGatewayService } from './payment-gateway.service';

@Controller()
export class PaymentGatewayController {
  
  constructor(private readonly roleService: PaymentGatewayService) {}

  @MessagePattern('paymentGateway.create')
  create(@Payload('data') createPaymentGatewayInput: CreatePaymentGatewayInput, @Ctx() context: ExecutionContext): Promise<PaymentGateway> {
    return this.roleService.create(createPaymentGatewayInput);
  }

  @MessagePattern('paymentGateway.update')
  update(@Payload('data') updatePaymentGatewayInput: UpdatePaymentGatewayInput): Promise<PaymentGateway> {
    return this.roleService.update(updatePaymentGatewayInput);
  }

  @MessagePattern('paymentGateway.remove')
  async remove(@Payload('data') removePaymentGatewayInput: RemovePaymentGatewayInput): Promise<RemoveResponse> {
    await this.roleService.remove(removePaymentGatewayInput);
    return new RemoveResponse();
  }

  @MessagePattern('paymentGateway.findOne')
  findOne(@Payload('data') findPaymentGatewayInput: FindPaymentGatewayInput): Promise<PaymentGateway> {
    return this.roleService.findOne(findPaymentGatewayInput);
  }

  @MessagePattern('paymentGateway.findAll')
  findAll(): Promise<PaymentGateway[]> {
    return this.roleService.findAll();
  }
}
