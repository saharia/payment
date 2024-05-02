"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBrandInput", {
    enumerable: true,
    get: function() {
        return UpdateBrandInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _brandtype = require("../../../../orm-config/entity/enum/brand-type");
const _paymentmode = require("../../../../orm-config/entity/enum/payment-mode");
const _updatepaymentgatewaykeyinput = require("./update-payment-gateway-key-input");
const _validation = require("../../../../validation");
const _brandentity = require("../../../../orm-config/entity/payment/brand.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateBrandInput = class UpdateBrandInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsUUID)(4),
    _ts_metadata("design:type", String)
], UpdateBrandInput.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_brandtype.BrandType, {
        nullable: true
    }),
    (0, _classvalidator.IsEnum)(_brandtype.BrandType),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", typeof _brandtype.BrandType === "undefined" ? Object : _brandtype.BrandType)
], UpdateBrandInput.prototype, "brandType", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _validation.ColumnExists)(_brandentity.Brand),
    _ts_metadata("design:type", String)
], UpdateBrandInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentmode.PaymentMode, {
        nullable: true
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_paymentmode.PaymentMode),
    _ts_metadata("design:type", typeof _paymentmode.PaymentMode === "undefined" ? Object : _paymentmode.PaymentMode)
], UpdateBrandInput.prototype, "paymentMode", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _updatepaymentgatewaykeyinput.UpdatePaymentGatewayKeyInput
        ], {
        nullable: true
    }),
    (0, _classvalidator.ValidateNested)(),
    (0, _classtransformer.Type)(()=>_updatepaymentgatewaykeyinput.UpdatePaymentGatewayKeyInput),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Array)
], UpdateBrandInput.prototype, "paymentGatewayKeys", void 0);
UpdateBrandInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdateBrandInput);

//# sourceMappingURL=update-brand.input.js.map