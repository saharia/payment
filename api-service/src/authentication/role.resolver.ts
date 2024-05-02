import { NatService } from '@brightauto/api-models';
import { Role } from '@brightauto/api-models';
import { CreateRoleInput } from '@brightauto/api-models';
import { FindRoleInput } from '@brightauto/api-models';
import { RemoveRoleInput } from '@brightauto/api-models';
import { UpdateRoleInput } from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Role')
export class RoleResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => Role, { name: 'createRole' })
  create(@Context() context: any, @Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.natService.send(context, 'role.create', createRoleInput, 'graphQl');
  }

  @Mutation(() => Role, { name: 'updateRole' })
  update(@Context() context: any, @Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.natService.send(context, 'role.update', updateRoleInput, 'graphQl');
  }

  @Mutation(() => Role, { name: 'removeRole' })
  remove(@Context() context: any, @Args('removeRoleInput') removeRoleInput: RemoveRoleInput) {
    return this.natService.send(context, 'role.remove', removeRoleInput, 'graphQl');
  }
  
  @Query(() => Role, { name: 'role' })
  findOne(@Context() context: any, @Args('findRoleInput') findRoleInput: FindRoleInput) {
    return this.natService.send(context, 'role.findOne', findRoleInput, 'graphQl');
  }

  @Query(() => [Role], { name: 'roles' })
  findAll(@Context() context: any) {
    return this.natService.send(context, 'role.findAll', {}, 'graphQl');
  }
}
