import { 
  CreateUserClientInput,
  FindUserClientInput,
  NatService,
  RemoveUserClientInput,
  UpdateUserClientInput
} from '@brightauto/api-models';
import { User } from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('UserClient')
export class UserClientResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => User, { name: 'createUserClient' })
  create(@Context() context: any, @Args('createUserClientInput') createUserClientInput: CreateUserClientInput) {
    return this.natService.send(context, 'user.client.create', createUserClientInput, 'graphQl');
  }

  @Mutation(() => User, { name: 'updateUserClient' })
  update(@Context() context: any, @Args('updateUserClientInput') updateUserClientInput: UpdateUserClientInput) {
    return this.natService.send(context, 'user.client.update', updateUserClientInput, 'graphQl');
  }

  @Mutation(() => User, { name: 'removeUserClient' })
  remove(@Context() context: any, @Args('removeUserClientInput') removeUserClientInput: RemoveUserClientInput) {
    return this.natService.send(context, 'user.client.remove', removeUserClientInput, 'graphQl');
  }
  
  @Query(() => User, { name: 'userClient' })
  findOne(@Context() context: any, @Args('findUserClientInput') findUserClientInput: FindUserClientInput) {
    return this.natService.send(context, 'user.client.findOne', findUserClientInput, 'graphQl');
  }

  @Query(() => [User], { name: 'userClients' })
  findAll(@Context() context: any) {
    return this.natService.send(context, 'user.client.findAll', {}, 'graphQl');
  }

}
