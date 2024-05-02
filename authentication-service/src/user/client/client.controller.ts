import { 
  CreateUserClientInput,
  User,
  UpdateUserClientInput,
  RemoveUserClientInput,
  RemoveResponse,
  FindUserClientInput,
  AuthMicroServiceGuard,
  AuthRoleMicroServiceGuard
} from '@brightauto/api-models';
import { Controller, ExecutionContext, UseGuards } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { UserClientService } from './client.service';

/* Check authentication and authorization */
@UseGuards(AuthMicroServiceGuard, AuthRoleMicroServiceGuard)
@Controller()
export class UserClientController {
  constructor(private readonly userClientService: UserClientService) {}

  @MessagePattern('user.client.create')
  create(@Payload('data') createUserClientInput: CreateUserClientInput, @Ctx() context: ExecutionContext): Promise<User> {
    return this.userClientService.create(createUserClientInput);
  }

  @MessagePattern('user.client.update')
  update(@Payload('data') updateUserClientInput: UpdateUserClientInput): Promise<User> {
    return this.userClientService.update(updateUserClientInput);
  }

  @MessagePattern('user.client.remove')
  async remove(@Payload('data') removeUserClientInput: RemoveUserClientInput): Promise<RemoveResponse> {
    await this.userClientService.remove(removeUserClientInput);
    return new RemoveResponse();
  }

  @MessagePattern('user.client.findOne')
  findOne(@Payload('data') findUserClientInput: FindUserClientInput): Promise<User> {
    return this.userClientService.findOne(findUserClientInput);
  }

  @MessagePattern('user.client.findAll')
  findAll(): Promise<User[]> {
    return this.userClientService.findAll();
  }
}
