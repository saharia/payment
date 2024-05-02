import { 
  CreateUserClientInput,
  FindUserClientInput,
  RemoveUserClientInput,
  Role,
  roles,
  UpdateUserClientInput,
  User
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserClientService {

  @InjectRepository(User)
  private readonly user: Repository<User>;

  @InjectRepository(Role)
  private readonly role: Repository<Role>;
  
  async create(createUserClientInput: CreateUserClientInput): Promise<User> {
    try {
      const user = this.user.create(createUserClientInput);
      const role = await this.role.findOneOrFail({ where: { name: roles.client } });
      user.roles = [role];
      return await this.user.save(user);
    } catch (error) {
      throw error;
    }
  }

  async update(updateUserClientInput: UpdateUserClientInput): Promise<User> {
    try {
      let user = await this.user.preload(updateUserClientInput);
      return await this.user.save(user);
    } catch (error) {
      throw error;
    }
  }

  async remove(removeUserClientInput: RemoveUserClientInput): Promise<boolean> {
    try {
      await this.user.softDelete(removeUserClientInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findUserClientInput: FindUserClientInput): Promise<User> {
    try {
      const query = {
        where: {
          id: findUserClientInput.id,
          roles: { name: roles.client }
        },
        relations: [ "role", "role.actions" ]
      };
      return await this.user.findOneOrFail(query);
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<User[]> {
    try {
      return await this.user.find({ where: { roles: { name: roles.client } }, relations: [ "roles", "roles.actions" ] });
    } catch (error) {
      throw error;
    }
  }
}
