import { 
  CreateUserAdminInput,
  FindUserAdminInput,
  NatService,
  RemoveUserAdminInput,
  UpdateUserAdminInput
} from '@brightauto/api-models';
import { User } from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('UserAdmin')
export class UserAdminResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => User, { name: 'createUserAdmin' })
  create(@Context() context: any, @Args('createUserAdminInput') createUserAdminInput: CreateUserAdminInput) {
    return this.natService.send(context, 'user.admin.create', createUserAdminInput, 'graphQl');
  }

  @Mutation(() => User, { name: 'updateUserAdmin' })
  update(@Context() context: any, @Args('updateUserAdminInput') updateUserAdminInput: UpdateUserAdminInput) {
    return this.natService.send(context, 'user.admin.update', updateUserAdminInput, 'graphQl');
  }

  @Mutation(() => User, { name: 'removeUserAdmin' })
  remove(@Context() context: any, @Args('removeUserAdminInput') removeUserAdminInput: RemoveUserAdminInput) {
    return this.natService.send(context, 'user.admin.remove', removeUserAdminInput, 'graphQl');
  }
  
  @Query(() => User, { name: 'userAdmin' })
  findOne(@Context() context: any, @Args('findUserAdminInput') findUserAdminInput: FindUserAdminInput) {
    return this.natService.send(context, 'user.admin.findOne', findUserAdminInput, 'graphQl');
  }

  @Query(() => [User], { name: 'userAdmins' })
  findAll(@Context() context: any) {
    return this.natService.send(context, 'user.admin.findAll', {}, 'graphQl');
  }

}
