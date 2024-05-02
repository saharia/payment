import { ConfigService } from "@nestjs/config";
import { ClientProxy } from "@nestjs/microservices";
export declare class NatService {
    private configService;
    protected readonly client: ClientProxy;
    constructor(configService: ConfigService);
    bindGraphqlHeader(context: any, data: any): import("@nestjs/microservices").NatsRecord<any, any>;
    bindData(context: any, data: any): import("@nestjs/microservices").NatsRecord<any, any>;
    bindMicroServiceHeader(context: any, data: any): import("@nestjs/microservices").NatsRecord<any, any>;
    send(context: any, action: any, data: any, headerType?: string): Promise<any>;
}
