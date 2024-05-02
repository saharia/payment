import { 
  CreateRoleInput,
  Role,
  UpdateRoleInput,
  RemoveRoleInput,
  RemoveResponse,
  FindRoleInput,
  AuthMicroServiceGuard,
  AuthRoleMicroServiceGuard
} from '@brightauto/api-models';
import { Controller, ExecutionContext, UseGuards } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { RoleService } from './role.service';

/* Check authentication and authorization */
@UseGuards(AuthMicroServiceGuard, AuthRoleMicroServiceGuard)
@Controller()
export class RoleController {
  
  constructor(private readonly roleService: RoleService) {}

  @MessagePattern('role.create')
  create(@Payload('data') createRoleInput: CreateRoleInput, @Ctx() context: ExecutionContext): Promise<Role> {
    return this.roleService.create(createRoleInput);
  }

  @MessagePattern('role.update')
  update(@Payload('data') updateRoleInput: UpdateRoleInput): Promise<Role> {
    return this.roleService.update(updateRoleInput);
  }

  @MessagePattern('role.remove')
  async remove(@Payload('data') removeRoleInput: RemoveRoleInput): Promise<RemoveResponse> {
    await this.roleService.remove(removeRoleInput);
    return new RemoveResponse();
  }

  @MessagePattern('role.findOne')
  findOne(@Payload('data') findRoleInput: FindRoleInput): Promise<Role> {
    return this.roleService.findOne(findRoleInput);
  }

  @MessagePattern('role.findAll')
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }
}
