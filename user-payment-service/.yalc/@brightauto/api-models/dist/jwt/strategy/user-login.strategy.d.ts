import { ClientProxy } from '@nestjs/microservices';
declare const JwtUserLoginStrategy_base: new (...args: any[]) => any;
export declare class JwtUserLoginStrategy extends JwtUserLoginStrategy_base {
    protected readonly client: ClientProxy;
    constructor();
    validate(email: string, password: string): Promise<any>;
}
export {};
