"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentGatewayInput", {
    enumerable: true,
    get: function() {
        return CreatePaymentGatewayInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paymentgatewayentity = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const _columnexistsdecorator = require("../../../../validation/custom/column-exists/column-exists.decorator");
const _paymentgatewayplaninput = require("../gateway-plan/payment-gateway-plan.input");
const _validation = require("../../../../validation");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreatePaymentGatewayInput = class CreatePaymentGatewayInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MinLength)(5),
    (0, _columnexistsdecorator.ColumnExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsUrl)(),
    (0, _columnexistsdecorator.ColumnExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiSandboxTokenUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsUrl)(),
    (0, _columnexistsdecorator.ColumnExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiSandboxPaymentUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsUrl)(),
    (0, _columnexistsdecorator.ColumnExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiTokenUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsUrl)(),
    (0, _columnexistsdecorator.ColumnExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiPaymentUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _paymentgatewayplaninput.PaymentGatewayPlanInput
        ]),
    (0, _classvalidator.ValidateNested)({
        each: true
    }),
    (0, _validation.IsUniqeArrayObjets)('paymentPlan.id'),
    (0, _classvalidator.IsArray)(),
    (0, _classtransformer.Type)(()=>_paymentgatewayplaninput.PaymentGatewayPlanInput),
    _ts_metadata("design:type", Array)
], CreatePaymentGatewayInput.prototype, "paymentGatewayPlans", void 0);
CreatePaymentGatewayInput = _ts_decorate([
    (0, _graphql.InputType)()
], CreatePaymentGatewayInput);

//# sourceMappingURL=create-payment-gateway.input.js.map