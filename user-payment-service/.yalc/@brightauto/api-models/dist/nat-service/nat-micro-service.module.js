"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatMicroServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const nat_service_1 = require("./nat.service");
let NatMicroServiceModule = class NatMicroServiceModule {
};
NatMicroServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            nat_service_1.NatService,
            {
                provide: 'NAT_SERVICE',
                useFactory: async (configService) => {
                    return await microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.NATS,
                        options: {
                            servers: configService.get('NAT_SERVERS') ? configService.get('NAT_SERVERS').split(',') : [],
                            headers: { 'x-version': '1.0.0' },
                        },
                    });
                },
                inject: [config_1.ConfigService]
            },
            config_1.ConfigModule
        ],
        exports: [
            'NAT_SERVICE',
            nat_service_1.NatService,
        ]
    })
], NatMicroServiceModule);
exports.NatMicroServiceModule = NatMicroServiceModule;
//# sourceMappingURL=nat-micro-service.module.js.map