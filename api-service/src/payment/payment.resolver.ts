import { NatService } from '@brightauto/api-models';
import { PaymentInput } from '@brightauto/api-models';
import { UserPaymentResponse } from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

@Resolver('Payment')
export class PaymentResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => UserPaymentResponse, { name: 'initiatePayment' })
  create(@Context() context: any, @Args('paymentInput') paymentInput: PaymentInput) {
    return this.natService.send(context, 'payment.initiate', paymentInput, 'graphQl');
  }

}
