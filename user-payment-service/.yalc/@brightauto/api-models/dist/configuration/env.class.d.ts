import { Environment } from './env.enum';
export declare class EnvironmentVariables {
    NODE_ENV: Environment;
    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    JWT_SECRET: string;
    NAT_SERVERS: string;
    TABLE_PREFIX: string;
    PASSWORD_SALT: string;
    MICROSERVICE_TIMEOUT: number;
    MIGRATIONS_TABLE_NAME: string;
}
