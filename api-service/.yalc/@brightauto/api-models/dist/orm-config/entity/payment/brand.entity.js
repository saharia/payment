"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Brand", {
    enumerable: true,
    get: function() {
        return Brand;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _userentity = require("../authentication/user.entity");
const _baseentity = require("../base.entity");
const _paymentmode = require("../enum/payment-mode");
const _brandtype = require("../enum/brand-type");
const _paymentgatewaykeyentity = require("./payment-gateway-key.entity");
const _generateapikey = require("../../../crypto-auth-service/generate-api-key");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let Brand = class Brand extends _baseentity.BaseEntityColumn {
    async createApiKey() {
        this.apiKey = (0, _generateapikey.generateApiKey)();
    }
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)({
        type: "enum",
        enum: _brandtype.BrandType,
        default: _brandtype.BrandType.WEBSITE
    }),
    _ts_metadata("design:type", typeof _brandtype.BrandType === "undefined" ? Object : _brandtype.BrandType)
], Brand.prototype, "brandType", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], Brand.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)({
        type: "enum",
        enum: _paymentmode.PaymentMode,
        default: _paymentmode.PaymentMode.SANDBOX
    }),
    _ts_metadata("design:type", typeof _paymentmode.PaymentMode === "undefined" ? Object : _paymentmode.PaymentMode)
], Brand.prototype, "paymentMode", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewaykeyentity.PaymentGatewayKey
        ]),
    (0, _typeorm.OneToMany)(()=>_paymentgatewaykeyentity.PaymentGatewayKey, (paymentGatewayKey)=>paymentGatewayKey.brand, {
        cascade: true
    }),
    _ts_metadata("design:type", Array)
], Brand.prototype, "paymentGatewayKeys", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_userentity.User),
    (0, _typeorm.ManyToOne)(()=>_userentity.User, (user)=>user.brands),
    _ts_metadata("design:type", typeof _typeorm.Relation === "undefined" ? Object : _typeorm.Relation)
], Brand.prototype, "user", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], Brand.prototype, "apiKey", void 0);
_ts_decorate([
    (0, _typeorm.BeforeInsert)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], Brand.prototype, "createApiKey", null);
Brand = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], Brand);

//# sourceMappingURL=brand.entity.js.map