import { NatService } from '@brightauto/api-models';
import { Action } from '@brightauto/api-models';
import { CreateActionInput } from '@brightauto/api-models';
import { FindActionInput } from '@brightauto/api-models';
import { RemoveActionInput } from '@brightauto/api-models';
import { UpdateActionInput } from '@brightauto/api-models';
import { Inject } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

@Resolver('Action')
export class ActionResolver {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => Action, { name: 'createAction' })
  create(@Context() context: any, @Args('createActionInput') createActionInput: CreateActionInput) {
    return this.natService.send(context, 'action.create', createActionInput, 'graphQl');
  }

  @Mutation(() => Action, { name: 'updateAction' })
  update(@Context() context: any, @Args('updateActionInput') updateActionInput: UpdateActionInput) {
    return this.natService.send(context, 'action.update', updateActionInput, 'graphQl');
  }

  @Mutation(() => Action, { name: 'removeAction' })
  remove(@Context() context: any, @Args('removeActionInput') removeActionInput: RemoveActionInput) {
    return this.natService.send(context, 'action.remove', removeActionInput, 'graphQl');
  }
  
  @Query(() => Action, { name: 'action' })
  findOne(@Context() context: any, @Args('findActionInput') findActionInput: FindActionInput) {
    return this.natService.send(context, 'action.findOne', findActionInput, 'graphQl');
  }

  @Query(() => [Action], { name: 'actions' })
  findAll(@Context() context: any) {
    return this.natService.send(context, 'action.findAll', {}, 'graphQl');
  }


}
