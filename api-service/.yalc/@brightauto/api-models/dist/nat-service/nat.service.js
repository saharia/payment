"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NatService", {
    enumerable: true,
    get: function() {
        return NatService;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _microservices = require("@nestjs/microservices");
const _nats = /*#__PURE__*/ _interop_require_wildcard(require("nats"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let NatService = class NatService {
    bindGraphqlHeader(context, data) {
        const authorization = context.req.headers.authorization;
        const headers = _nats.headers();
        // console.log(authorization);
        if (authorization) {
            headers.set('authorization', authorization);
        }
        return new _microservices.NatsRecordBuilder({
            data
        }).setHeaders(headers).build();
    }
    bindData(context, data) {
        const authorization = context.req.headers.authorization;
        const headers = _nats.headers();
        // console.log(authorization);
        if (authorization) {
            headers.set('authorization', authorization);
        }
        return new _microservices.NatsRecordBuilder({
            data
        }).setHeaders(headers).build();
    }
    bindMicroServiceHeader(context, data) {
        const authorization = context.getHeaders().headers.get('authorization')[0];
        const headers = _nats.headers();
        if (authorization) {
            headers.set('authorization', authorization);
        }
        return new _microservices.NatsRecordBuilder({
            data
        }).setHeaders(headers).build();
    }
    async send(context, action, data, headerType) {
        let record;
        switch(headerType){
            /* If this function call from inside microservice */ case 'microservice':
                record = this.bindMicroServiceHeader(context, data);
                break;
            /* If this function call from graphql resolver */ case 'graphQl':
                record = this.bindGraphqlHeader(context, data);
                break;
            default:
                record = data;
                break;
        }
        const serviceTimeout = this.configService.get('MICROSERVICE_TIMEOUT');
        return this.client.send(action, record);
    }
    constructor(configService){
        this.configService = configService;
    }
};
_ts_decorate([
    (0, _common.Inject)('NAT_SERVICE'),
    _ts_metadata("design:type", typeof _microservices.ClientProxy === "undefined" ? Object : _microservices.ClientProxy)
], NatService.prototype, "client", void 0);
NatService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], NatService);

//# sourceMappingURL=nat.service.js.map