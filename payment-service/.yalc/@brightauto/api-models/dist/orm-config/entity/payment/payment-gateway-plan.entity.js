"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentGatewayPlan", {
    enumerable: true,
    get: function() {
        return PaymentGatewayPlan;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _paymentgatewaykeyentity = require("./payment-gateway-key.entity");
const _paymentgatewayentity = require("./payment-gateway.entity");
const _paymentplanentity = require("./payment-plan.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaymentGatewayPlan = class PaymentGatewayPlan extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], PaymentGatewayPlan.prototype, "percentage", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentplanentity.PaymentPlan),
    (0, _typeorm.ManyToOne)(()=>_paymentplanentity.PaymentPlan, (paymentPlan)=>paymentPlan.paymentGatewayPlans),
    _ts_metadata("design:type", typeof _paymentplanentity.PaymentPlan === "undefined" ? Object : _paymentplanentity.PaymentPlan)
], PaymentGatewayPlan.prototype, "paymentPlan", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentgatewayentity.PaymentGateway),
    (0, _typeorm.ManyToOne)(()=>_paymentgatewayentity.PaymentGateway, (paymentGateway)=>paymentGateway.paymentGatewayPlans, {
        orphanedRowAction: "soft-delete"
    }),
    _ts_metadata("design:type", typeof _paymentgatewayentity.PaymentGateway === "undefined" ? Object : _paymentgatewayentity.PaymentGateway)
], PaymentGatewayPlan.prototype, "paymentGateway", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewaykeyentity.PaymentGatewayKey
        ]),
    (0, _typeorm.ManyToMany)(()=>_paymentgatewaykeyentity.PaymentGatewayKey, (paymentGatewayKey)=>paymentGatewayKey.paymentGatewayPlans, {
        orphanedRowAction: "soft-delete"
    }),
    _ts_metadata("design:type", Array)
], PaymentGatewayPlan.prototype, "paymentGatewayKeys", void 0);
PaymentGatewayPlan = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], PaymentGatewayPlan);

//# sourceMappingURL=payment-gateway-plan.entity.js.map