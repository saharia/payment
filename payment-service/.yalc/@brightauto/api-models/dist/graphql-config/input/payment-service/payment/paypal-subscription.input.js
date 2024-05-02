"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaypalSubscriptionInput", {
    enumerable: true,
    get: function() {
        return PaypalSubscriptionInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paypalproducttype = require("../../../../orm-config/entity/enum/paypal.product.type");
const _paypalbillingcycles = require("./paypal/paypal-billing-cycles");
const _paypalpaymentpreferences = require("./paypal/paypal-payment-preferences");
const _paypalsubscriptiontaxes = require("./paypal/paypal-subscription-taxes");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaypalSubscriptionInput = class PaypalSubscriptionInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalproducttype.PaypalProductType),
    (0, _classvalidator.IsEnum)(_paypalproducttype.PaypalProductType),
    _ts_metadata("design:type", typeof _paypalproducttype.PaypalProductType === "undefined" ? Object : _paypalproducttype.PaypalProductType)
], PaypalSubscriptionInput.prototype, "type", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], PaypalSubscriptionInput.prototype, "description", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalbillingcycles.PaypalBillingCycles),
    (0, _classtransformer.Type)(()=>_paypalbillingcycles.PaypalBillingCycles),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalbillingcycles.PaypalBillingCycles === "undefined" ? Object : _paypalbillingcycles.PaypalBillingCycles)
], PaypalSubscriptionInput.prototype, "billingCycles", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalpaymentpreferences.PaypalPaymentPreferences),
    (0, _classtransformer.Type)(()=>_paypalpaymentpreferences.PaypalPaymentPreferences),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalpaymentpreferences.PaypalPaymentPreferences === "undefined" ? Object : _paypalpaymentpreferences.PaypalPaymentPreferences)
], PaypalSubscriptionInput.prototype, "paymentPreferences", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalsubscriptiontaxes.PaypalSubscriptionTaxes),
    (0, _classtransformer.Type)(()=>_paypalsubscriptiontaxes.PaypalSubscriptionTaxes),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalsubscriptiontaxes.PaypalSubscriptionTaxes === "undefined" ? Object : _paypalsubscriptiontaxes.PaypalSubscriptionTaxes)
], PaypalSubscriptionInput.prototype, "taxes", void 0);
PaypalSubscriptionInput = _ts_decorate([
    (0, _graphql.InputType)()
], PaypalSubscriptionInput);

//# sourceMappingURL=paypal-subscription.input.js.map