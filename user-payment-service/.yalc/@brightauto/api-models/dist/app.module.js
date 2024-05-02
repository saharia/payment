"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const common_module_1 = require("./common/common.module");
const configuration_1 = require("./configuration");
const database_1 = require("./database");
const database_module_1 = require("./database/database.module");
const graphql_config_module_1 = require("./graphql-config/graphql-config.module");
const orm_config_module_1 = require("./orm-config/orm-config.module");
const validation_module_1 = require("./validation/validation.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            validation_module_1.ValidationModule,
            database_module_1.DatabaseModule,
            graphql_config_module_1.GraphqlConfigModule,
            orm_config_module_1.OrmConfigModule,
            configuration_1.ConfigurationModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [configuration_1.ConfigurationModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    entityPrefix: configService.get('TABLE_PREFIX'),
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [
                        __dirname + '/orm-config/entity/**/*.{ts,js}'
                    ],
                    namingStrategy: new database_1.SnakeNamingStrategy(),
                    migrations: [
                        __dirname + '/database/migration/**/*.{ts,js}'
                    ],
                    migrationsTableName: configService.get('TABLE_PREFIX') + configService.get('MIGRATIONS_TABLE_NAME'),
                    migrationsRun: false,
                    synchronize: false
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [
            common_module_1.CommonModule,
            validation_module_1.ValidationModule,
            database_module_1.DatabaseModule,
            graphql_config_module_1.GraphqlConfigModule,
            orm_config_module_1.OrmConfigModule,
            configuration_1.ConfigurationModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map