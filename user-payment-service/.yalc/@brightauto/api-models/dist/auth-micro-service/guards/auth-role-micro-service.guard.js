"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoleMicroServiceGuard = void 0;
const common_1 = require("@nestjs/common");
const execution_context_host_1 = require("@nestjs/core/helpers/execution-context-host");
const microservices_1 = require("@nestjs/microservices");
const passport_1 = require("@nestjs/passport");
let AuthRoleMicroServiceGuard = class AuthRoleMicroServiceGuard extends (0, passport_1.AuthGuard)('jwtAuthRoleMicroService') {
    canActivate(context) {
        return super.canActivate(new execution_context_host_1.ExecutionContextHost([context.switchToRpc().getContext()]));
    }
    handleRequest(err, user) {
        console.log("checking roles -->");
        if (err || !user) {
            throw err || new common_1.ForbiddenException();
        }
        return user;
    }
};
__decorate([
    (0, common_1.Inject)('NAT_SERVICE'),
    __metadata("design:type", microservices_1.ClientProxy)
], AuthRoleMicroServiceGuard.prototype, "client", void 0);
AuthRoleMicroServiceGuard = __decorate([
    (0, common_1.Injectable)()
], AuthRoleMicroServiceGuard);
exports.AuthRoleMicroServiceGuard = AuthRoleMicroServiceGuard;
//# sourceMappingURL=auth-role-micro-service.guard.js.map