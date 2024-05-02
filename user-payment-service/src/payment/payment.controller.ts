import { PaymentInput, Paypal } from '@brightauto/api-models';
import { Controller, ExecutionContext } from '@nestjs/common';
import { MessagePattern, Payload, Ctx } from '@nestjs/microservices';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern('payment.initiate')
  create(@Payload('data') paymentInput: PaymentInput, @Ctx() context: ExecutionContext): Promise<Paypal> {
    return this.paymentService.initiatePayment(paymentInput);
  }

}
