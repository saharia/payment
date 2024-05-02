"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateBrandInput", {
    enumerable: true,
    get: function() {
        return CreateBrandInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _brandentity = require("../../../../orm-config/entity/payment/brand.entity");
const _validation = require("../../../../validation");
const _brandtype = require("../../../../orm-config/entity/enum/brand-type");
const _paymentmode = require("../../../../orm-config/entity/enum/payment-mode");
const _createpaymentgatewaykeyinput = require("./create-payment-gateway-key-input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateBrandInput = class CreateBrandInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_brandtype.BrandType),
    (0, _classvalidator.IsEnum)(_brandtype.BrandType),
    _ts_metadata("design:type", typeof _brandtype.BrandType === "undefined" ? Object : _brandtype.BrandType)
], CreateBrandInput.prototype, "brandType", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    (0, _validation.ColumnExists)(_brandentity.Brand),
    _ts_metadata("design:type", String)
], CreateBrandInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentmode.PaymentMode),
    (0, _classvalidator.IsEnum)(_paymentmode.PaymentMode),
    _ts_metadata("design:type", typeof _paymentmode.PaymentMode === "undefined" ? Object : _paymentmode.PaymentMode)
], CreateBrandInput.prototype, "paymentMode", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _createpaymentgatewaykeyinput.CreatePaymentGatewayKeyInput
        ]),
    (0, _classvalidator.ArrayMinSize)(1),
    (0, _classvalidator.ValidateNested)({
        each: true
    }),
    (0, _classvalidator.IsArray)(),
    (0, _classtransformer.Type)(()=>_createpaymentgatewaykeyinput.CreatePaymentGatewayKeyInput),
    _ts_metadata("design:type", Array)
], CreateBrandInput.prototype, "paymentGatewayKeys", void 0);
CreateBrandInput = _ts_decorate([
    (0, _graphql.InputType)()
], CreateBrandInput);

//# sourceMappingURL=create-brand.input.js.map