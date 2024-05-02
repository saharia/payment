import { ExecutionContext } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
declare const AuthRoleMicroServiceGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthRoleMicroServiceGuard extends AuthRoleMicroServiceGuard_base {
    protected readonly client: ClientProxy;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any): any;
}
export {};
