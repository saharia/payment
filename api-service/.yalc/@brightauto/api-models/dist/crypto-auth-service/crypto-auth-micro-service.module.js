"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CryptoAuthMicroServiceModule", {
    enumerable: true,
    get: function() {
        return CryptoAuthMicroServiceModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _cryptoauthmicroservicestrategy = require("../jwt/strategy/crypto-auth-micro-service.strategy");
const _natservice = require("../nat-service");
const _cryptoauthmicroserviceguard = require("./guards/crypto-auth-micro-service.guard");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CryptoAuthMicroServiceModule = class CryptoAuthMicroServiceModule {
};
CryptoAuthMicroServiceModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _natservice.NatMicroServiceModule
        ],
        providers: [
            {
                provide: "APP_GUARD",
                useClass: _cryptoauthmicroserviceguard.CryptoAuthMicroServiceGuard
            },
            _cryptoauthmicroservicestrategy.CryptoAuthMicroServiceStrategy,
            _config.ConfigModule
        ],
        exports: [
            // 'NAT_SERVICE',
            _cryptoauthmicroservicestrategy.CryptoAuthMicroServiceStrategy
        ]
    })
], CryptoAuthMicroServiceModule);

//# sourceMappingURL=crypto-auth-micro-service.module.js.map