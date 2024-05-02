import { ConfigService } from "@nestjs/config";
import { ConfigurationModule } from "../configuration";
export declare const jwtFactory: {
    imports: (typeof ConfigurationModule)[];
    useFactory: (configService: ConfigService) => Promise<{
        secret: string;
    }>;
    inject: (typeof ConfigService)[];
};
