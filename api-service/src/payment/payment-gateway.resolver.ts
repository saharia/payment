import { NatService } from '@brightauto/api-models';
import { 
  PaymentGateway,
  CreatePaymentGatewayInput,
  FindAllPaymentGatewayInput,
  FindPaymentGatewayInput,
  RemovePaymentGatewayInput,
  UpdatePaymentGatewayInput,
  ApiServiceExceptionFilter
 } from '@brightauto/api-models';
import { Inject, OnModuleInit, UseFilters } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

@Resolver('PaymentGateway')
@UseFilters(ApiServiceExceptionFilter)
export class PaymentGatewayResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  @Inject('NAT_SERVICE')
  protected readonly client: ClientProxy;
  
  async onModuleInit() {
  }

  @Mutation(() => PaymentGateway, { name: 'createPaymentGateway' })
  create(@Context() context: any, @Args('createPaymentGatewayInput') createPaymentGatewayInput: CreatePaymentGatewayInput) {
    return this.natService.send(context, 'paymentGateway.create', createPaymentGatewayInput, 'graphQl');
  }

  @Mutation(() => PaymentGateway, { name: 'updatePaymentGateway' })
  update(@Context() context: any, @Args('updatePaymentGatewayInput') updatePaymentGatewayInput: UpdatePaymentGatewayInput) {
    return this.natService.send(context, 'paymentGateway.update', updatePaymentGatewayInput, 'graphQl');
  }

  @Mutation(() => PaymentGateway, { name: 'removePaymentGateway' })
  remove(@Context() context: any, @Args('removePaymentGatewayInput') removePaymentGatewayInput: RemovePaymentGatewayInput) {
    return this.natService.send(context, 'paymentGateway.remove', removePaymentGatewayInput, 'graphQl');
  }
  
  @Query(() => PaymentGateway, { name: 'paymentGateway' })
  findOne(@Context() context: any, @Args('findPaymentGatewayInput') findPaymentGatewayInput: FindPaymentGatewayInput) {
    return this.natService.send(context, 'paymentGateway.findOne', findPaymentGatewayInput, 'graphQl');
  }

  @Query(() => [PaymentGateway], { name: 'paymentGateways' })
  findAll(@Context() context: any, @Args('findAllPaymentGatewayInput', { nullable: true }) findAllPaymentGatewayInput: FindAllPaymentGatewayInput) {
    return this.natService.send(context, 'paymentGateway.findAll', findAllPaymentGatewayInput, 'graphQl');
  }

}
