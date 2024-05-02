"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RazorpayEntity", {
    enumerable: true,
    get: function() {
        return RazorpayEntity;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _paymentgatewaykeyentity = require("./payment-gateway-key.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RazorpayEntity = class RazorpayEntity extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], RazorpayEntity.prototype, "orderId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], RazorpayEntity.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], RazorpayEntity.prototype, "returnUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], RazorpayEntity.prototype, "cancelUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], RazorpayEntity.prototype, "paymentType", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], RazorpayEntity.prototype, "paymentMode", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentgatewaykeyentity.PaymentGatewayKey),
    (0, _typeorm.ManyToOne)(()=>_paymentgatewaykeyentity.PaymentGatewayKey, (paymentGatewayKey)=>paymentGatewayKey.paypals),
    _ts_metadata("design:type", typeof _paymentgatewaykeyentity.PaymentGatewayKey === "undefined" ? Object : _paymentgatewaykeyentity.PaymentGatewayKey)
], RazorpayEntity.prototype, "paymentGatewayKey", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)('simple-json', {
        nullable: true
    }),
    _ts_metadata("design:type", Object)
], RazorpayEntity.prototype, "orderJson", void 0);
RazorpayEntity = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)({
        name: 'razorpay'
    })
], RazorpayEntity);

//# sourceMappingURL=razorpay.entity.js.map