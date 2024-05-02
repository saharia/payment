import { 
  CreateUserAdminInput,
  FindUserAdminInput,
  RemoveUserAdminInput,
  Role,
  roles,
  UpdateUserAdminInput,
  User
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserAdminService {

  @InjectRepository(User)
  private readonly user: Repository<User>;

  @InjectRepository(Role)
  private readonly role: Repository<Role>;
  
  async create(createUserAdminInput: CreateUserAdminInput): Promise<User> {
    try {
      const user = this.user.create(createUserAdminInput);
      const role = await this.role.findOneOrFail({ where: { name: roles.admin } });
      user.roles = [role];
      return await this.user.save(user);
    } catch (error) {
      throw error;
    }
  }

  async update(updateUserAdminInput: UpdateUserAdminInput): Promise<User> {
    try {
      let user = await this.user.preload(updateUserAdminInput);
      return await this.user.save(user);
    } catch (error) {
      throw error;
    }
  }

  async remove(removeUserAdminInput: RemoveUserAdminInput): Promise<boolean> {
    try {
      await this.user.softDelete(removeUserAdminInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findUserAdminInput: FindUserAdminInput): Promise<User> {
    try {
      const query = {
        where: {
          id: findUserAdminInput.id,
        },
        relations: [ "roles", "roles.actions" ]
      };
      return await this.user.findOneOrFail(query);
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<User[]> {
    try {
      return await this.user.find({ where: { roles: { name: roles.admin } }, relations: [ "roles", "roles.actions" ] });
    } catch (error) {
      throw error;
    }
  }
}
