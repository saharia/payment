import { 
  CreateActionInput,
  Action,
  UpdateActionInput,
  RemoveActionInput,
  RemoveResponse,
  FindActionInput,
  FindActionByNameInput,
  AuthMicroServiceGuard,
  AuthRoleMicroServiceGuard,
} from '@brightauto/api-models';
import { Controller, ExecutionContext, UseGuards } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { ActionService } from './action.service';

/* Check authentication and authorization */
// @UseGuards(AuthMicroServiceGuard, AuthRoleMicroServiceGuard)
@Controller()
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @MessagePattern('action.create')
  create(@Payload('data') createActionInput: CreateActionInput, @Ctx() context: ExecutionContext): Promise<Action> {
    return this.actionService.create(createActionInput);
  }

  @MessagePattern('action.update')
  update(@Payload('data') updateActionInput: UpdateActionInput): Promise<Action> {
    return this.actionService.update(updateActionInput);
  }

  @MessagePattern('action.remove')
  async remove(@Payload('data') removeActionInput: RemoveActionInput): Promise<RemoveResponse> {
    await this.actionService.remove(removeActionInput);
    return new RemoveResponse();
  }

  @MessagePattern('action.findOne')
  findOne(@Payload('data') findActionInput: FindActionInput): Promise<Action> {
    return this.actionService.findOne(findActionInput);
  }

  @MessagePattern('action.findByName')
  findByName(@Payload('data') findActionByNameInput: FindActionByNameInput): Promise<Action | null> {
    return this.actionService.findByName(findActionByNameInput);
  }

  @MessagePattern('action.findAll')
  findAll(): Promise<Action[]> {
    console.log("here");
    return this.actionService.findAll();
  }
}
