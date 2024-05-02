import {
  AuthMicroServiceGuard,
  AuthRoleMicroServiceGuard,
  CreateUserAdminInput,
  FindUserAdminInput,
  RemoveResponse,
  RemoveUserAdminInput,
  UpdateUserAdminInput,
  User
} from '@brightauto/api-models';
import { Controller, ExecutionContext, UseGuards } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { UserAdminService } from './admin.service';

/* Check authentication and authorization */
@UseGuards(AuthMicroServiceGuard, AuthRoleMicroServiceGuard)
@Controller()
export class UserAdminController {
  constructor(private readonly userAdminService: UserAdminService) {}

  @MessagePattern('user.admin.create')
  create(@Payload('data') createUserAdminInput: CreateUserAdminInput, @Ctx() context: ExecutionContext): Promise<User> {
    return this.userAdminService.create(createUserAdminInput);
  }

  @MessagePattern('user.admin.update')
  update(@Payload('data') updateUserAdminInput: UpdateUserAdminInput): Promise<User> {
    return this.userAdminService.update(updateUserAdminInput);
  }

  @MessagePattern('user.admin.remove')
  async remove(@Payload('data') removeUserAdminInput: RemoveUserAdminInput): Promise<RemoveResponse> {
    await this.userAdminService.remove(removeUserAdminInput);
    return new RemoveResponse();
  }

  @MessagePattern('user.admin.findOne')
  findOne(@Payload('data') findUserAdminInput: FindUserAdminInput): Promise<User> {
    return this.userAdminService.findOne(findUserAdminInput);
  }

  @MessagePattern('user.admin.findAll')
  findAll(): Promise<User[]> {
    return this.userAdminService.findAll();
  }
}
