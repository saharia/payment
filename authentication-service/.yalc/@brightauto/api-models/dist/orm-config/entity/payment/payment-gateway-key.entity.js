"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentGatewayKey", {
    enumerable: true,
    get: function() {
        return PaymentGatewayKey;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _brandentity = require("./brand.entity");
const _paymentgatewayplanentity = require("./payment-gateway-plan.entity");
const _paymentgatewayentity = require("./payment-gateway.entity");
const _paypalentity = require("./paypal.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaymentGatewayKey = class PaymentGatewayKey extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGatewayKey.prototype, "clientId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGatewayKey.prototype, "clientSecret", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentgatewayentity.PaymentGateway),
    (0, _typeorm.ManyToOne)(()=>_paymentgatewayentity.PaymentGateway, (paymentGateway)=>paymentGateway.paymentGatewayKeys),
    _ts_metadata("design:type", typeof _paymentgatewayentity.PaymentGateway === "undefined" ? Object : _paymentgatewayentity.PaymentGateway)
], PaymentGatewayKey.prototype, "paymentGateway", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_brandentity.Brand),
    (0, _typeorm.ManyToOne)(()=>_brandentity.Brand, (brand)=>brand.paymentGatewayKeys, {
        orphanedRowAction: "soft-delete"
    }),
    _ts_metadata("design:type", typeof _typeorm.Relation === "undefined" ? Object : _typeorm.Relation)
], PaymentGatewayKey.prototype, "brand", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewayplanentity.PaymentGatewayPlan
        ]),
    (0, _typeorm.ManyToMany)(()=>_paymentgatewayplanentity.PaymentGatewayPlan, (paymentGatewayPlan)=>paymentGatewayPlan.paymentGatewayKeys, {
        cascade: true
    }),
    (0, _typeorm.JoinTable)({
        name: 'payment_gateway_key_payment_gateway_plan'
    }),
    _ts_metadata("design:type", Array)
], PaymentGatewayKey.prototype, "paymentGatewayPlans", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paypalentity.Paypal
        ]),
    (0, _typeorm.OneToMany)(()=>_paypalentity.Paypal, (paypal)=>paypal.paymentGatewayKey),
    _ts_metadata("design:type", Array)
], PaymentGatewayKey.prototype, "paypals", void 0);
PaymentGatewayKey = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], PaymentGatewayKey);

//# sourceMappingURL=payment-gateway-key.entity.js.map