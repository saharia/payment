"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentPlanInput", {
    enumerable: true,
    get: function() {
        return CreatePaymentPlanInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
const _paymentplanentity = require("../../../../orm-config/entity/payment/payment-plan.entity");
const _columnexistsdecorator = require("../../../../validation/custom/column-exists/column-exists.decorator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreatePaymentPlanInput = class CreatePaymentPlanInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MinLength)(5),
    (0, _columnexistsdecorator.ColumnExists)(_paymentplanentity.PaymentPlan),
    _ts_metadata("design:type", String)
], CreatePaymentPlanInput.prototype, "name", void 0);
CreatePaymentPlanInput = _ts_decorate([
    (0, _graphql.InputType)()
], CreatePaymentPlanInput);

//# sourceMappingURL=create-payment-plan.input.js.map