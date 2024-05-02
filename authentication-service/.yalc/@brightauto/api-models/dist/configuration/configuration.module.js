"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConfigurationModule", {
    enumerable: true,
    get: function() {
        return ConfigurationModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _envvalidation = require("./env.validation");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const ENV = process.env.NODE_ENV;
let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = _ts_decorate([
    (0, _common.Module)({
        providers: [],
        imports: [
            _config.ConfigModule.forRoot({
                envFilePath: !ENV ? 'env/development.env' : `env/${ENV}.env`,
                validate: _envvalidation.envValidate,
                isGlobal: true
            })
        ],
        exports: [
            _config.ConfigModule.forRoot({
                envFilePath: !ENV ? 'env/development.env' : `env/${ENV}.env`,
                validate: _envvalidation.envValidate,
                isGlobal: true
            })
        ]
    })
], ConfigurationModule);

//# sourceMappingURL=configuration.module.js.map