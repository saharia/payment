import { ExecutionContext } from '@nestjs/common';
declare const AuthMicroServiceGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthMicroServiceGuard extends AuthMicroServiceGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any): any;
}
export {};
