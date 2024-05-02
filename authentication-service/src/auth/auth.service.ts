import { 
  User,
  Role,
  LoginResponse,
  roles,
  RegisterUserClientInput,
  FindUserByEmailInput,
  FindUserInput,
  Action,
  FindActionByRoleInput,
  FindUserByBrandApiKeyInput
} from '@brightauto/api-models';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService
  ) {

  }

  @InjectRepository(User)
  private readonly user: Repository<User>;

  @InjectRepository(Role)
  private readonly role: Repository<Role>;

  @InjectRepository(Action)
  private readonly action: Repository<Action>;

  async loginAdminUsingEmail(user: User): Promise<LoginResponse> {
    try {
      user.roles = user.roles.filter(val => val.name == roles.admin);
      if(!user.roles.length) {
        throw new UnauthorizedException();
      }
      return {
        accessToken: this.getToken(user, roles.admin),
        user
      };
    } catch (error) {
      throw error;
    }
  }

  async loginClientUsingEmail(user: User): Promise<LoginResponse> {
    try {
      user.roles = user.roles.filter(val => val.name == roles.client);
      if(!user.roles.length) {
        throw new UnauthorizedException();
      }
      return {
        accessToken: this.getToken(user, roles.client),
        user
      };
    } catch (error) {
      throw error;
    }
  }

  async loginSuperAdminUsingEmail(user: User): Promise<LoginResponse> {
    try {
      user.roles = user.roles.filter(val => val.name == roles.superadmin);
      if(!user.roles.length) {
        throw new UnauthorizedException();
      }
      return {
        accessToken: this.getToken(user, roles.superadmin),
        user
      };
    } catch (error) {
      throw error;
    }
  }

  async registerClient(registerUserClientInput: RegisterUserClientInput): Promise<User> {
    try {
      const user = this.user.create(registerUserClientInput);
      const role = await this.role.findOneOrFail({ where: { name: roles.client } });
      user.roles.push(role);
      return await this.user.save(user);
    } catch (error) {
      throw error;
    }
  }

  getToken(user: User, role: string): string {
    let userRole = user.roles.filter(val => val.name == role);
    if(!userRole.length) {
      throw new UnauthorizedException();
    }
    const payload = { username: null, sub: user.id, roleId: userRole[0].id };
    return this.jwtService.sign(payload);
  }

  async findUser(findUserInput: FindUserInput): Promise<User>  {
    try {
      let user = await this.user.findOneOrFail({ where: { id: findUserInput.id, roles: { id: findUserInput.roleId } }, relations: [ 'roles' ] });
      // user.roles = user.roles.filter(val => val.id == findUserInput.roleId);
      return user;
    } catch (error) {
      throw new RpcException("User not found");
    }
  }

  async findUserByEmail(findUserByEmailInput: FindUserByEmailInput): Promise<User>  {
    try {
      return await this.user.findOneOrFail({ where: { email: findUserByEmailInput.email }, relations: [ "roles" ] });
    } catch (error) {
      throw new RpcException("User not found");
    }
  }

  async findActionByRole(findActionByRoleInput: FindActionByRoleInput): Promise<Action>  {
    try {
      let action = await this.action.findOne({ where: { name: findActionByRoleInput.action }, relations: [ "roles" ] });
      if(!action) {
        throw new RpcException("Action not found");
      }
      let roles = action.roles.filter(val => val.id == findActionByRoleInput.roleId);
      if(!roles.length) {
        throw new ForbiddenException();
      }
      return action;
    } catch (error) {
      throw error;
    }
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.user.findOne({ where: { email }, relations: [ 'roles' ] });
    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if(isMatch) {
        const { password, ...result } = user;
        return result;
      } else {
        return null;
      }
    }
    return null;
  }

  async findUserByBrandApiKey(findUserByBrandApiKeyInput: FindUserByBrandApiKeyInput): Promise<User | null>  {
    try {
      let user = await this.user.findOneOrFail({ where: { brands: findUserByBrandApiKeyInput }, relations: [ 'brands' ] });
      // user.roles = user.roles.filter(val => val.id == findUserInput.roleId);
      return user;
    } catch (error) {
      return null;
    }
  }

}
