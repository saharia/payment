"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NatMicroServiceModule", {
    enumerable: true,
    get: function() {
        return NatMicroServiceModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _microservices = require("@nestjs/microservices");
const _natservice = require("./nat.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NatMicroServiceModule = class NatMicroServiceModule {
};
NatMicroServiceModule = _ts_decorate([
    (0, _common.Module)({
        imports: [],
        providers: [
            _natservice.NatService,
            {
                provide: 'NAT_SERVICE',
                useFactory: async (configService)=>{
                    return await _microservices.ClientProxyFactory.create({
                        transport: _microservices.Transport.NATS,
                        options: {
                            servers: configService.get('NAT_SERVERS') ? configService.get('NAT_SERVERS').split(',') : [],
                            headers: {
                                'x-version': '1.0.0'
                            }
                        }
                    });
                },
                inject: [
                    _config.ConfigService
                ]
            },
            _config.ConfigModule
        ],
        exports: [
            'NAT_SERVICE',
            _natservice.NatService
        ]
    })
], NatMicroServiceModule);

//# sourceMappingURL=nat-micro-service.module.js.map