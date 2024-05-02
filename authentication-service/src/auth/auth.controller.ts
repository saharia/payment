import {
  Action,
  AuthMicroServiceGuard,
  AuthUser,
  FindActionByRoleInput,
  FindUserByBrandApiKeyInput,
  FindUserByEmailInput,
  FindUserInput,
  LoggedInUser,
  LoginAdminUsingEmailInput,
  LoginClientUsingEmailInput,
  LoginResponse,
  LoginSuperAdminUsingEmailInput,
  RegisterUserClientInput,
  User
} from '@brightauto/api-models';
import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('userLogin'))
  @MessagePattern('auth.loginAdminUsingEmail')
  loginAdminUsingEmail(@LoggedInUser() user: User, @Payload('body') data: LoginAdminUsingEmailInput): Promise<LoginResponse> {
    return this.authService.loginAdminUsingEmail(user);
  }

  @UseGuards(AuthGuard('userLogin'))
  @MessagePattern('auth.loginClientUsingEmail')
  loginClientUsingEmail(@LoggedInUser() user: User, @Payload('body') data: LoginClientUsingEmailInput): Promise<LoginResponse> {
    return this.authService.loginClientUsingEmail(user);
  }

  @UseGuards(AuthGuard('userLogin'))
  @MessagePattern('auth.loginSuperAdminUsingEmail')
  loginSuperAdminUsingEmail(@LoggedInUser() user: User, @Payload('body') data: LoginSuperAdminUsingEmailInput): Promise<LoginResponse> {
    return this.authService.loginSuperAdminUsingEmail(user);
  }

  @UseGuards(AuthMicroServiceGuard)
  @MessagePattern('auth.getUserByToken')
  getUserByToken(@AuthUser() user: User): User {
    return user;
  }

  @MessagePattern('auth.registerUserClient')
  registerClient(@Payload('data') registerUserClientInput: RegisterUserClientInput): Promise<User> {
    return this.authService.registerClient(registerUserClientInput);
  }

  @MessagePattern('auth.findUser')
  findUser(@Payload('data') findUserInput: FindUserInput): Promise<User> {
    return this.authService.findUser(findUserInput);
  }

  @MessagePattern('auth.findUserByBrandApiKey')
  findUserByBrandApiKey(@Payload('data') findUserByBrandApiKeyInput: FindUserByBrandApiKeyInput): Promise<User | null> {
    return this.authService.findUserByBrandApiKey(findUserByBrandApiKeyInput);
  }

  @MessagePattern('auth.findUserByEmail')
  findUserByEmail(@Payload('data') findUserByEmailInput: FindUserByEmailInput): Promise<User> {
    return this.authService.findUserByEmail(findUserByEmailInput);
  }

  @MessagePattern('auth.findActionByRole')
  findActionByRole(@Payload('data') findActionByRoleInput: FindActionByRoleInput): Promise<Action> {
    return this.authService.findActionByRole(findActionByRoleInput);
  }

}
