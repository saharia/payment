"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentGatewayPlanInput", {
    enumerable: true,
    get: function() {
        return PaymentGatewayPlanInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paymentplaninput = require("./payment-plan.input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaymentGatewayPlanInput = class PaymentGatewayPlanInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.Max)(100),
    (0, _classvalidator.Min)(0),
    _ts_metadata("design:type", Number)
], PaymentGatewayPlanInput.prototype, "percentage", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentplaninput.PaymentPlanInput),
    (0, _classvalidator.ValidateNested)(),
    (0, _classtransformer.Type)(()=>_paymentplaninput.PaymentPlanInput),
    _ts_metadata("design:type", typeof _paymentplaninput.PaymentPlanInput === "undefined" ? Object : _paymentplaninput.PaymentPlanInput)
], PaymentGatewayPlanInput.prototype, "paymentPlan", void 0);
PaymentGatewayPlanInput = _ts_decorate([
    (0, _graphql.InputType)()
], PaymentGatewayPlanInput);

//# sourceMappingURL=payment-gateway-plan.input.js.map