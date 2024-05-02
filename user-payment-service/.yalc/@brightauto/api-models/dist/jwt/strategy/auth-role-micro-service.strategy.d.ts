import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { NatService } from '../../nat-service';
declare const JwtAuthRoleMicroServiceStrategy_base: new (...args: any[]) => any;
export declare class JwtAuthRoleMicroServiceStrategy extends JwtAuthRoleMicroServiceStrategy_base {
    private natService;
    private configService;
    protected readonly client: ClientProxy;
    constructor(natService: NatService, configService: ConfigService);
    validate(context: any, payload: any): Promise<any>;
}
export {};
