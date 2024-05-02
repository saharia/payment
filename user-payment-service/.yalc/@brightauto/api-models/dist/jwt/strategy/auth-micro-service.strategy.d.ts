import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { NatService } from '../../nat-service';
declare const JwtAuthMicroServiceStrategy_base: new (...args: any[]) => any;
export declare class JwtAuthMicroServiceStrategy extends JwtAuthMicroServiceStrategy_base {
    private natService;
    private configService;
    protected readonly client: ClientProxy;
    constructor(natService: NatService, configService: ConfigService);
    validate(context: any, payload: any): Promise<any>;
}
export {};
