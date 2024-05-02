"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthGuardMicroServiceModule", {
    enumerable: true,
    get: function() {
        return AuthGuardMicroServiceModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _natservice = require("../nat-service");
const _authmicroservicestrategy = require("../jwt/strategy/auth-micro-service.strategy");
const _authrolemicroservicestrategy = require("../jwt/strategy/auth-role-micro-service.strategy");
const _authmicroserviceguard = require("./guards/auth-micro-service.guard");
const _authrolemicroserviceguard = require("./guards/auth-role-micro-service.guard");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthGuardMicroServiceModule = class AuthGuardMicroServiceModule {
};
AuthGuardMicroServiceModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _natservice.NatMicroServiceModule
        ],
        providers: [
            {
                provide: "APP_GUARD",
                useClass: _authmicroserviceguard.AuthMicroServiceGuard
            },
            {
                provide: "APP_GUARD",
                useClass: _authrolemicroserviceguard.AuthRoleMicroServiceGuard
            },
            _authmicroservicestrategy.JwtAuthMicroServiceStrategy,
            _authrolemicroservicestrategy.JwtAuthRoleMicroServiceStrategy,
            _config.ConfigModule
        ],
        exports: [
            _authrolemicroservicestrategy.JwtAuthRoleMicroServiceStrategy,
            _authmicroservicestrategy.JwtAuthMicroServiceStrategy
        ]
    })
], AuthGuardMicroServiceModule);

//# sourceMappingURL=auth-guard-micro-service.module.js.map