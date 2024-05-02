"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthMicroServiceModule", {
    enumerable: true,
    get: function() {
        return AuthMicroServiceModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _authmicroservicestrategy = require("../jwt/strategy/auth-micro-service.strategy");
const _authrolemicroservicestrategy = require("../jwt/strategy/auth-role-micro-service.strategy");
const _userloginstrategy = require("../jwt/strategy/user-login.strategy");
const _natservice = require("../nat-service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthMicroServiceModule = class AuthMicroServiceModule {
};
AuthMicroServiceModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _natservice.NatMicroServiceModule
        ],
        providers: [
            /* {
      provide: 'NAT_SERVICE',
      useFactory: async (configService: ConfigService) => {
        return await ClientProxyFactory.create({
          transport: Transport.NATS,
          options: {
            servers: configService.get('NAT_SERVERS') ? configService.get('NAT_SERVERS').split(',') : [],
            headers: { 'x-version': '1.0.0' },
          },
        })
      },
      inject: [ConfigService]
    }, */ /* {
      provide: "APP_GUARD",
      useClass: AuthMicroServiceGuard,
    }, */ /* {
      provide: "APP_GUARD",
      useClass: AuthRoleMicroServiceGuard,
    }, */ _authmicroservicestrategy.JwtAuthMicroServiceStrategy,
            _authrolemicroservicestrategy.JwtAuthRoleMicroServiceStrategy,
            _userloginstrategy.JwtUserLoginStrategy,
            _config.ConfigModule
        ],
        exports: [
            // 'NAT_SERVICE',
            _authmicroservicestrategy.JwtAuthMicroServiceStrategy,
            _authrolemicroservicestrategy.JwtAuthRoleMicroServiceStrategy,
            _userloginstrategy.JwtUserLoginStrategy
        ]
    })
], AuthMicroServiceModule);

//# sourceMappingURL=auth-micro-service.module.js.map