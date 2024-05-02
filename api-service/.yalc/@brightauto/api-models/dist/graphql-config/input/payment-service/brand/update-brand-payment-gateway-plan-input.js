"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBrandPaymentGatewayPlanInput", {
    enumerable: true,
    get: function() {
        return UpdateBrandPaymentGatewayPlanInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
const _paymentgatewayplanentity = require("../../../../orm-config/entity/payment/payment-gateway-plan.entity");
const _relationexistsdecorator = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateBrandPaymentGatewayPlanInput = class UpdateBrandPaymentGatewayPlanInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUUID)(4),
    (0, _relationexistsdecorator.RelationExists)(_paymentgatewayplanentity.PaymentGatewayPlan),
    _ts_metadata("design:type", String)
], UpdateBrandPaymentGatewayPlanInput.prototype, "id", void 0);
UpdateBrandPaymentGatewayPlanInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdateBrandPaymentGatewayPlanInput);

//# sourceMappingURL=update-brand-payment-gateway-plan-input.js.map