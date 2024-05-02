import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { NatService } from '../../nat-service';
import { Strategy } from 'passport-custom';
declare const CryptoAuthMicroServiceStrategy_base: new (...args: any[]) => Strategy;
export declare class CryptoAuthMicroServiceStrategy extends CryptoAuthMicroServiceStrategy_base {
    private natService;
    private configService;
    protected readonly client: ClientProxy;
    constructor(natService: NatService, configService: ConfigService);
    validate(context: any): Promise<any>;
}
export {};
