import { 
  CreatePaymentPlanInput,
  FindAllPaymentPlanInput,
  FindPaymentPlanInput,
  NatService,
  RemovePaymentPlanInput,
  UpdatePaymentPlanInput,
  ApiServiceExceptionFilter
} from '@brightauto/api-models';
import { PaymentPlan } from '@brightauto/api-models';
import { OnModuleInit, UseFilters } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('PaymentPlan')
@UseFilters(ApiServiceExceptionFilter)
export class PaymentPlanResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => PaymentPlan, { name: 'createPaymentPlan' })
  create(@Context() context: any, @Args('createPaymentPlanInput') createPaymentPlanInput: CreatePaymentPlanInput) {
    return this.natService.send(context, 'paymentPlan.create', createPaymentPlanInput, 'graphQl');
  }

  @Mutation(() => PaymentPlan, { name: 'updatePaymentPlan' })
  update(@Context() context: any, @Args('updatePaymentPlanInput') updatePaymentPlanInput: UpdatePaymentPlanInput) {
    return this.natService.send(context, 'paymentPlan.update', updatePaymentPlanInput, 'graphQl');
  }

  @Mutation(() => PaymentPlan, { name: 'removePaymentPlan' })
  remove(@Context() context: any, @Args('removePaymentPlanInput') removePaymentPlanInput: RemovePaymentPlanInput) {
    return this.natService.send(context, 'paymentPlan.remove', removePaymentPlanInput, 'graphQl');
  }
  
  @Query(() => PaymentPlan, { name: 'paymentPlan' })
  findOne(@Context() context: any, @Args('findPaymentPlanInput') findPaymentPlanInput: FindPaymentPlanInput) {
    return this.natService.send(context, 'paymentPlan.findOne', findPaymentPlanInput, 'graphQl');
  }

  @Query(() => [PaymentPlan], { name: 'paymentPlans' })
  findAll(@Context() context: any, @Args('findAllPaymentPlanInput', { nullable: true }) findAllPaymentPlanInput: FindAllPaymentPlanInput) {
    return this.natService.send(context, 'paymentPlan.findAll', findAllPaymentPlanInput, 'graphQl');
  }

}
