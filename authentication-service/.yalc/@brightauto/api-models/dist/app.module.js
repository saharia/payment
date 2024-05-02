"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _typeorm = require("@nestjs/typeorm");
const _appcontroller = require("./app.controller");
const _appservice = require("./app.service");
const _commonmodule = require("./common/common.module");
const _configuration = require("./configuration");
const _database = require("./database");
const _databasemodule = require("./database/database.module");
const _graphqlconfigmodule = require("./graphql-config/graphql-config.module");
const _ormconfigmodule = require("./orm-config/orm-config.module");
const _validationmodule = require("./validation/validation.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _commonmodule.CommonModule,
            _validationmodule.ValidationModule,
            _databasemodule.DatabaseModule,
            _graphqlconfigmodule.GraphqlConfigModule,
            _ormconfigmodule.OrmConfigModule,
            _configuration.ConfigurationModule,
            _typeorm.TypeOrmModule.forRootAsync({
                imports: [
                    _configuration.ConfigurationModule
                ],
                useFactory: (configService)=>({
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
                        namingStrategy: new _database.SnakeNamingStrategy(),
                        migrations: [
                            __dirname + '/database/migration/**/*.{ts,js}'
                        ],
                        migrationsTableName: configService.get('TABLE_PREFIX') + configService.get('MIGRATIONS_TABLE_NAME'),
                        migrationsRun: false,
                        synchronize: false
                    }),
                inject: [
                    _config.ConfigService
                ]
            })
        ],
        exports: [
            _commonmodule.CommonModule,
            _validationmodule.ValidationModule,
            _databasemodule.DatabaseModule,
            _graphqlconfigmodule.GraphqlConfigModule,
            _ormconfigmodule.OrmConfigModule,
            _configuration.ConfigurationModule
        ],
        controllers: [
            _appcontroller.AppController
        ],
        providers: [
            _appservice.AppService
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map