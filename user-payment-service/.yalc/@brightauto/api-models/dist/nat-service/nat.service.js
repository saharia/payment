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
exports.NatService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const nats = require("nats");
const rxjs_1 = require("rxjs");
let NatService = class NatService {
    constructor(configService) {
        this.configService = configService;
    }
    bindGraphqlHeader(context, data) {
        const authorization = context.req.headers.authorization;
        const headers = nats.headers();
        if (authorization) {
            headers.set('authorization', authorization);
        }
        return new microservices_1.NatsRecordBuilder({ data }).setHeaders(headers).build();
    }
    bindData(context, data) {
        const authorization = context.req.headers.authorization;
        const headers = nats.headers();
        if (authorization) {
            headers.set('authorization', authorization);
        }
        return new microservices_1.NatsRecordBuilder({ data }).setHeaders(headers).build();
    }
    bindMicroServiceHeader(context, data) {
        const authorization = context.getHeaders().headers.get('authorization')[0];
        const headers = nats.headers();
        if (authorization) {
            headers.set('authorization', authorization);
        }
        return new microservices_1.NatsRecordBuilder({ data }).setHeaders(headers).build();
    }
    async send(context, action, data, headerType) {
        let record;
        switch (headerType) {
            case 'microservice':
                record = this.bindMicroServiceHeader(context, data);
                break;
            case 'graphQl':
                record = this.bindGraphqlHeader(context, data);
                break;
            default:
                record = data;
                break;
        }
        const serviceTimeout = this.configService.get('MICROSERVICE_TIMEOUT');
        return this.client.send(action, record).pipe((0, rxjs_1.timeout)(serviceTimeout));
    }
};
__decorate([
    (0, common_1.Inject)('NAT_SERVICE'),
    __metadata("design:type", microservices_1.ClientProxy)
], NatService.prototype, "client", void 0);
NatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], NatService);
exports.NatService = NatService;
//# sourceMappingURL=nat.service.js.map