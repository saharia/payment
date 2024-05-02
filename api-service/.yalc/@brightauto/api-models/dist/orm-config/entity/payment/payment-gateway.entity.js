"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentGateway", {
    enumerable: true,
    get: function() {
        return PaymentGateway;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _paymentgatewaykeyentity = require("./payment-gateway-key.entity");
const _paymentgatewayplanentity = require("./payment-gateway-plan.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaymentGateway = class PaymentGateway extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGateway.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGateway.prototype, "apiSandboxTokenUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGateway.prototype, "apiSandboxPaymentUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGateway.prototype, "apiTokenUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentGateway.prototype, "apiPaymentUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewaykeyentity.PaymentGatewayKey
        ], {
        nullable: true
    }),
    (0, _typeorm.OneToMany)(()=>_paymentgatewaykeyentity.PaymentGatewayKey, (paymentGatewayKey)=>paymentGatewayKey.paymentGateway),
    _ts_metadata("design:type", Array)
], PaymentGateway.prototype, "paymentGatewayKeys", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewayplanentity.PaymentGatewayPlan
        ], {
        nullable: true
    }),
    (0, _typeorm.OneToMany)(()=>_paymentgatewayplanentity.PaymentGatewayPlan, (paymentGatewayPlan)=>paymentGatewayPlan.paymentGateway, {
        cascade: true
    }),
    _ts_metadata("design:type", Array)
], PaymentGateway.prototype, "paymentGatewayPlans", void 0);
PaymentGateway = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], PaymentGateway);

//# sourceMappingURL=payment-gateway.entity.js.map