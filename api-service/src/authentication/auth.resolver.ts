import { 
  LoginAdminUsingEmailInput,
  LoginClientUsingEmailInput,
  LoginSuperAdminUsingEmailInput,
  NatService,
  RegisterUserClientInput
} from '@brightauto/api-models';
import { User } from '@brightauto/api-models';
import { LoginResponse } from '@brightauto/api-models';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Auth')
export class AuthResolver {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Query(() => LoginResponse)
  clientLogin(@Context() context: any, @Args('loginClientUsingEmailInput') loginClientUsingEmailInput: LoginClientUsingEmailInput) {
    return this.natService.send(context, 'auth.loginClientUsingEmail', { body: loginClientUsingEmailInput }, '');
  }

  @Query(() => LoginResponse)
  superAdminLogin(@Context() context: any, @Args('loginSuperAdminUsingEmailInput') loginSuperAdminUsingEmailInput: LoginSuperAdminUsingEmailInput) {
    return this.natService.send(context, 'auth.loginSuperAdminUsingEmail', { body: loginSuperAdminUsingEmailInput }, '');
  }

  @Query(() => LoginResponse)
  adminLogin(@Context() context: any, @Args('loginAdminUsingEmailInput') loginAdminUsingEmailInput: LoginAdminUsingEmailInput) {
    return this.natService.send(context, 'auth.loginAdminUsingEmail', { body: loginAdminUsingEmailInput }, '');
  }

  @Query(() => User)
  getUserByToken(@Context() context: any) {
    return this.natService.send(context, 'auth.getUserByToken', {}, 'graphQl');
  }

  @Mutation(() => User)
  registerClient(@Context() context: any, @Args('registerUserClientInput') registerUserClientInput: RegisterUserClientInput) {
    return this.natService.send(context, 'auth.registerUserClient', registerUserClientInput, 'graphQl');
  }


}
