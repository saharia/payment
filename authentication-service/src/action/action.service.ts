import { 
  Action,
  Role,
  CreateActionInput,
  UpdateActionInput,
  RemoveActionInput,
  FindActionInput,
  FindActionByNameInput,
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class ActionService {

  @InjectRepository(Action)
  private readonly action: Repository<Action>;

  @InjectRepository(Role)
  private readonly role: Repository<Role>;

  async create(createActionInput: CreateActionInput): Promise<Action> {
    try {
      const action = this.action.create(createActionInput);
      if(createActionInput.roleIds) {
        action.roles = await this.role.find({ where: { id: In(createActionInput.roleIds) } });
      }
      return await this.action.save(action);
    } catch (error) {
      throw error;
    }
  }

  async update(updateActionInput: UpdateActionInput): Promise<Action> {
    try {
      let action = await this.action.preload(updateActionInput);
      if(updateActionInput.roleIds) {
        action.roles = await this.role.find({ where: { id: In(updateActionInput.roleIds) } });
      }
      return await this.action.save(action);
    } catch (error) {
      throw error;
    }
  }

  async remove(removeActionInput: RemoveActionInput): Promise<boolean> {
    try {
      await this.action.softDelete(removeActionInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findActionInput: FindActionInput): Promise<Action> {
    try {
      const query = {
        where: {
          id: findActionInput.id,
        },
        relations: [ "roles" ]
      };
      return await this.action.findOneOrFail(query);
    } catch (error) {
      throw error;
    }
  }

  async findByName(findActionByNameInput: FindActionByNameInput): Promise<Action | null> {
    try {
      const query = {
        where: {
          name: findActionByNameInput.name,
        },
        relations: [ "roles" ]
      };
      return await this.action.findOne(query);
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<Action[]> {
    try {
      return await this.action.find({ relations: [ "roles" ] });
    } catch (error) {
      throw error;
    }
  }

}
