import { Controller } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller()
export class StripeController {
  
  constructor(private readonly razorPayService: StripeService) {}

  /* @MessagePattern('paypal.create')
  create(@Payload('data') createPaypalInput: CreatePaypalInput, @Ctx() context: ExecutionContext): Promise<Paypal> {
    return this.roleService.create(createPaypalInput);
  }

  @MessagePattern('paypal.update')
  update(@Payload('data') updatePaypalInput: UpdatePaypalInput): Promise<Paypal> {
    return this.roleService.update(updatePaypalInput);
  }

  @MessagePattern('paypal.remove')
  async remove(@Payload('data') removePaypalInput: RemovePaypalInput): Promise<RemoveResponse> {
    await this.roleService.remove(removePaypalInput);
    return new RemoveResponse();
  }

  @MessagePattern('paypal.findOne')
  findOne(@Payload('data') findPaypalInput: FindPaypalInput): Promise<Paypal> {
    return this.roleService.findOne(findPaypalInput);
  }

  @MessagePattern('paypal.findAll')
  findAll(): Promise<Paypal[]> {
    return this.roleService.findAll();
  } */
}
