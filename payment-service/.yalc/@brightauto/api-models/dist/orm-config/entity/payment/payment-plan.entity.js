"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentPlan", {
    enumerable: true,
    get: function() {
        return PaymentPlan;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
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
let PaymentPlan = class PaymentPlan extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], PaymentPlan.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewayplanentity.PaymentGatewayPlan
        ]),
    (0, _typeorm.OneToMany)(()=>_paymentgatewayplanentity.PaymentGatewayPlan, (paymentGatewayPlan)=>paymentGatewayPlan.paymentPlan),
    _ts_metadata("design:type", Array)
], PaymentPlan.prototype, "paymentGatewayPlans", void 0);
PaymentPlan = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], PaymentPlan);

//# sourceMappingURL=payment-plan.entity.js.map