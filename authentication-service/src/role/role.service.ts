import { 
  Role,
  Action,
  CreateRoleInput,
  UpdateRoleInput,
  RemoveRoleInput,
  FindRoleInput
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class RoleService {

  @InjectRepository(Role)
  private readonly role: Repository<Role>;

  @InjectRepository(Action)
  private readonly action: Repository<Action>;
  
  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    try {
      const role = this.role.create({ name: createRoleInput.name });
      if(createRoleInput.actions && createRoleInput.actions.length) {
        role.actions = await this.action.find({ where: { id: In(createRoleInput.actions) } })
      }
      return await this.role.save(role);
    } catch (error) {
      throw error;
    }
  }

  async update(updateRoleInput: UpdateRoleInput): Promise<Role> {
    try {
      let role = await this.role.findOneOrFail({ where: { id: updateRoleInput.id } });

      if(updateRoleInput.actions && updateRoleInput.actions.length) {
        role.actions = await this.action.find({ where: { id: In(updateRoleInput.actions) } })
      }
      return await this.role.save(Object.assign(role, updateRoleInput));
    } catch (error) {
      throw error;
    }
  }

  async remove(removeRoleInput: RemoveRoleInput): Promise<boolean> {
    try {
      await this.role.softDelete(removeRoleInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findRoleInput: FindRoleInput): Promise<Role> {
    try {
      const query = {
        where: {
          id: findRoleInput.id,
        },
        relations: [ "users", "actions" ]
      };
      return await this.role.findOneOrFail(query);
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<Role[]> {
    try {
      return await this.role.find({ relations: [ "users", "actions" ] });
    } catch (error) {
      throw error;
    }
  }
}
