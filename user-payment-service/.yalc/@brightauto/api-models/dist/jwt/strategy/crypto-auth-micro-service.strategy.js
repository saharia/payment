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
exports.CryptoAuthMicroServiceStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const passport_1 = require("@nestjs/passport");
const rxjs_1 = require("rxjs");
const nat_service_1 = require("../../nat-service");
const passport_custom_1 = require("passport-custom");
let CryptoAuthMicroServiceStrategy = class CryptoAuthMicroServiceStrategy extends (0, passport_1.PassportStrategy)(passport_custom_1.Strategy, 'cryptoAuthMicroService') {
    constructor(natService, configService) {
        super();
        this.natService = natService;
        this.configService = configService;
    }
    async validate(context) {
        const action = context.getSubject();
        const apiKey = context.getHeaders().headers.get('authorization') ? context.getHeaders().headers.get('authorization')[0].replace('Bearer ', '') : null;
        if (!apiKey) {
            throw new common_1.UnauthorizedException();
        }
        console.log("action ---->", action);
        const record = this.natService.bindMicroServiceHeader(context, { apiKey });
        const user = await (0, rxjs_1.lastValueFrom)(this.client.send('auth.findUserByBrandApiKey', record));
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
__decorate([
    (0, common_1.Inject)('NAT_SERVICE'),
    __metadata("design:type", microservices_1.ClientProxy)
], CryptoAuthMicroServiceStrategy.prototype, "client", void 0);
CryptoAuthMicroServiceStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nat_service_1.NatService,
        config_1.ConfigService])
], CryptoAuthMicroServiceStrategy);
exports.CryptoAuthMicroServiceStrategy = CryptoAuthMicroServiceStrategy;
//# sourceMappingURL=crypto-auth-micro-service.strategy.js.map