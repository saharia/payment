"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuardMicroServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nat_service_1 = require("../nat-service");
const auth_micro_service_strategy_1 = require("../jwt/strategy/auth-micro-service.strategy");
const auth_role_micro_service_strategy_1 = require("../jwt/strategy/auth-role-micro-service.strategy");
const auth_micro_service_guard_1 = require("./guards/auth-micro-service.guard");
const auth_role_micro_service_guard_1 = require("./guards/auth-role-micro-service.guard");
let AuthGuardMicroServiceModule = class AuthGuardMicroServiceModule {
};
AuthGuardMicroServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nat_service_1.NatMicroServiceModule
        ],
        providers: [
            {
                provide: "APP_GUARD",
                useClass: auth_micro_service_guard_1.AuthMicroServiceGuard,
            },
            {
                provide: "APP_GUARD",
                useClass: auth_role_micro_service_guard_1.AuthRoleMicroServiceGuard,
            },
            auth_micro_service_strategy_1.JwtAuthMicroServiceStrategy,
            auth_role_micro_service_strategy_1.JwtAuthRoleMicroServiceStrategy,
            config_1.ConfigModule
        ],
        exports: [
            auth_role_micro_service_strategy_1.JwtAuthRoleMicroServiceStrategy,
            auth_micro_service_strategy_1.JwtAuthMicroServiceStrategy
        ]
    })
], AuthGuardMicroServiceModule);
exports.AuthGuardMicroServiceModule = AuthGuardMicroServiceModule;
//# sourceMappingURL=auth-guard-micro-service.module.js.map