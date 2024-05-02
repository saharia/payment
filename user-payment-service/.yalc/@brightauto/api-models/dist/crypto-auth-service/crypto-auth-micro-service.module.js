"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoAuthMicroServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_auth_micro_service_strategy_1 = require("../jwt/strategy/crypto-auth-micro-service.strategy");
const nat_service_1 = require("../nat-service");
const crypto_auth_micro_service_guard_1 = require("./guards/crypto-auth-micro-service.guard");
let CryptoAuthMicroServiceModule = class CryptoAuthMicroServiceModule {
};
CryptoAuthMicroServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nat_service_1.NatMicroServiceModule
        ],
        providers: [
            {
                provide: "APP_GUARD",
                useClass: crypto_auth_micro_service_guard_1.CryptoAuthMicroServiceGuard,
            },
            crypto_auth_micro_service_strategy_1.CryptoAuthMicroServiceStrategy,
            config_1.ConfigModule
        ],
        exports: [
            crypto_auth_micro_service_strategy_1.CryptoAuthMicroServiceStrategy,
        ]
    })
], CryptoAuthMicroServiceModule);
exports.CryptoAuthMicroServiceModule = CryptoAuthMicroServiceModule;
//# sourceMappingURL=crypto-auth-micro-service.module.js.map