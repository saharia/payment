import {
  FindAllPaymentGatewayPlanInput,
  NatService, 
  PaymentGatewayPlan, 
} from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';

@Resolver('Payment')
export class OrderPaymentResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Query(() => [PaymentGatewayPlan], { name: 'orderPayments' })
  findAll(@Context() context: any, @Args('findAllPaymentGatewayPlanInput', { nullable: true }) findAllPaymentGatewayPlanInput: FindAllPaymentGatewayPlanInput) {
    return this.natService.send(context, 'externalApi.orderPayment.findAll', findAllPaymentGatewayPlanInput, 'graphQl');
  }

}
