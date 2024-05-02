"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoAuthMicroServiceGuard = void 0;
const common_1 = require("@nestjs/common");
const execution_context_host_1 = require("@nestjs/core/helpers/execution-context-host");
const passport_1 = require("@nestjs/passport");
let CryptoAuthMicroServiceGuard = class CryptoAuthMicroServiceGuard extends (0, passport_1.AuthGuard)(['cryptoAuthMicroService']) {
    canActivate(context) {
        return super.canActivate(new execution_context_host_1.ExecutionContextHost([context.switchToRpc().getContext()]));
    }
    handleRequest(err, user) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
CryptoAuthMicroServiceGuard = __decorate([
    (0, common_1.Injectable)()
], CryptoAuthMicroServiceGuard);
exports.CryptoAuthMicroServiceGuard = CryptoAuthMicroServiceGuard;
//# sourceMappingURL=crypto-auth-micro-service.guard.js.map