"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdatePaymentGatewayKeyInput", {
    enumerable: true,
    get: function() {
        return UpdatePaymentGatewayKeyInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _updatebrandpaymentgatewayinput = require("./update-brand-payment-gateway-input");
const _updatebrandpaymentgatewayplaninput = require("./update-brand-payment-gateway-plan-input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdatePaymentGatewayKeyInput = class UpdatePaymentGatewayKeyInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsUUID)(4),
    _ts_metadata("design:type", String)
], UpdatePaymentGatewayKeyInput.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_updatebrandpaymentgatewayinput.UpdateBrandPaymentGatewayInput, {
        nullable: true
    }),
    (0, _classvalidator.ValidateNested)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>_updatebrandpaymentgatewayinput.UpdateBrandPaymentGatewayInput),
    _ts_metadata("design:type", typeof _updatebrandpaymentgatewayinput.UpdateBrandPaymentGatewayInput === "undefined" ? Object : _updatebrandpaymentgatewayinput.UpdateBrandPaymentGatewayInput)
], UpdatePaymentGatewayKeyInput.prototype, "paymentGateway", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], UpdatePaymentGatewayKeyInput.prototype, "clientId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], UpdatePaymentGatewayKeyInput.prototype, "clientSecret", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _updatebrandpaymentgatewayplaninput.UpdateBrandPaymentGatewayPlanInput
        ], {
        nullable: true
    }),
    (0, _classvalidator.ValidateNested)({
        each: true
    }),
    (0, _classvalidator.IsArray)(),
    (0, _classvalidator.ArrayMinSize)(1),
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>_updatebrandpaymentgatewayplaninput.UpdateBrandPaymentGatewayPlanInput),
    _ts_metadata("design:type", Array)
], UpdatePaymentGatewayKeyInput.prototype, "paymentGatewayPlans", void 0);
UpdatePaymentGatewayKeyInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdatePaymentGatewayKeyInput);

//# sourceMappingURL=update-payment-gateway-key-input.js.map