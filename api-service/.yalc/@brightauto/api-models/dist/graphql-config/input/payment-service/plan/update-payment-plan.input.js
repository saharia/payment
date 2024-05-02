"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdatePaymentPlanInput", {
    enumerable: true,
    get: function() {
        return UpdatePaymentPlanInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _mappedtypes = require("@nestjs/mapped-types");
const _classvalidator = require("class-validator");
const _validation = require("../../../../validation");
const _paymentplanentity = require("../../../../orm-config/entity/payment/payment-plan.entity");
const _columnexistsdecorator = require("../../../../validation/custom/column-exists/column-exists.decorator");
const _createpaymentplaninput = require("./create-payment-plan.input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdatePaymentPlanInput = class UpdatePaymentPlanInput extends (0, _mappedtypes.PartialType)(_createpaymentplaninput.CreatePaymentPlanInput) {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsUUID)(4),
    (0, _validation.RelationExists)(_paymentplanentity.PaymentPlan),
    _ts_metadata("design:type", String)
], UpdatePaymentPlanInput.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.MinLength)(5),
    (0, _columnexistsdecorator.ColumnExists)(_paymentplanentity.PaymentPlan),
    _ts_metadata("design:type", String)
], UpdatePaymentPlanInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean, {
        nullable: true
    }),
    (0, _classvalidator.IsBoolean)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Boolean)
], UpdatePaymentPlanInput.prototype, "isActive", void 0);
UpdatePaymentPlanInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdatePaymentPlanInput);

//# sourceMappingURL=update-payment-plan.input.js.map