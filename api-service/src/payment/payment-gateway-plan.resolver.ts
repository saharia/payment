import {
  FindAllPaymentGatewayPlanInput,
  NatService, 
  PaymentGatewayPlan, 
} from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';

@Resolver('PaymentGatewayPlan')
export class PaymentGatewayPlanResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Query(() => [PaymentGatewayPlan], { name: 'paymentGatewayPlans' })
  findAll(@Context() context: any, @Args('findAllPaymentGatewayPlanInput', { nullable: true }) findAllPaymentGatewayPlanInput: FindAllPaymentGatewayPlanInput) {
    return this.natService.send(context, 'paymentGatewayPlan.findAll', findAllPaymentGatewayPlanInput, 'graphQl');
  }

}
