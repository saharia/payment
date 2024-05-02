"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentGatewayKeyInput", {
    enumerable: true,
    get: function() {
        return CreatePaymentGatewayKeyInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _createbrandpaymentgatewayinput = require("./create-brand-payment-gateway-input");
const _createbrandpaymentgatewayplaninput = require("./create-brand-payment-gateway-plan-input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreatePaymentGatewayKeyInput = class CreatePaymentGatewayKeyInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_createbrandpaymentgatewayinput.CreateBrandPaymentGatewayInput),
    (0, _classvalidator.ValidateNested)(),
    (0, _classtransformer.Type)(()=>_createbrandpaymentgatewayinput.CreateBrandPaymentGatewayInput),
    _ts_metadata("design:type", typeof _createbrandpaymentgatewayinput.CreateBrandPaymentGatewayInput === "undefined" ? Object : _createbrandpaymentgatewayinput.CreateBrandPaymentGatewayInput)
], CreatePaymentGatewayKeyInput.prototype, "paymentGateway", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayKeyInput.prototype, "clientId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreatePaymentGatewayKeyInput.prototype, "clientSecret", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _createbrandpaymentgatewayplaninput.CreateBrandPaymentGatewayPlanInput
        ]),
    (0, _classvalidator.ArrayMinSize)(1),
    (0, _classvalidator.ValidateNested)({
        each: true
    }),
    (0, _classvalidator.IsArray)(),
    (0, _classtransformer.Type)(()=>_createbrandpaymentgatewayplaninput.CreateBrandPaymentGatewayPlanInput),
    _ts_metadata("design:type", Array)
], CreatePaymentGatewayKeyInput.prototype, "paymentGatewayPlans", void 0);
CreatePaymentGatewayKeyInput = _ts_decorate([
    (0, _graphql.InputType)()
], CreatePaymentGatewayKeyInput);

//# sourceMappingURL=create-payment-gateway-key-input.js.map