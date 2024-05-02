"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMicroServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_micro_service_strategy_1 = require("../jwt/strategy/auth-micro-service.strategy");
const auth_role_micro_service_strategy_1 = require("../jwt/strategy/auth-role-micro-service.strategy");
const user_login_strategy_1 = require("../jwt/strategy/user-login.strategy");
const nat_service_1 = require("../nat-service");
let AuthMicroServiceModule = class AuthMicroServiceModule {
};
AuthMicroServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nat_service_1.NatMicroServiceModule
        ],
        providers: [
            auth_micro_service_strategy_1.JwtAuthMicroServiceStrategy,
            auth_role_micro_service_strategy_1.JwtAuthRoleMicroServiceStrategy,
            user_login_strategy_1.JwtUserLoginStrategy,
            config_1.ConfigModule
        ],
        exports: [
            auth_micro_service_strategy_1.JwtAuthMicroServiceStrategy,
            auth_role_micro_service_strategy_1.JwtAuthRoleMicroServiceStrategy,
            user_login_strategy_1.JwtUserLoginStrategy,
        ]
    })
], AuthMicroServiceModule);
exports.AuthMicroServiceModule = AuthMicroServiceModule;
//# sourceMappingURL=auth-micro-service.module.js.map