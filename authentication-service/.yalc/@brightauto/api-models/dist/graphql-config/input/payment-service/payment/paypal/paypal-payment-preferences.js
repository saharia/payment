"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaypalPaymentPreferences", {
    enumerable: true,
    get: function() {
        return PaypalPaymentPreferences;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paypalsetupfailureaction = require("../../../../../orm-config/entity/enum/paypal.setup-failure-action");
const _paypalsetupfee = require("./paypal-setup-fee");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaypalPaymentPreferences = class PaypalPaymentPreferences {
};
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsBoolean)(),
    _ts_metadata("design:type", Boolean)
], PaypalPaymentPreferences.prototype, "autoBillOutstanding", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalsetupfee.PaypalSetupFee),
    (0, _classtransformer.Type)(()=>_paypalsetupfee.PaypalSetupFee),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalsetupfee.PaypalSetupFee === "undefined" ? Object : _paypalsetupfee.PaypalSetupFee)
], PaypalPaymentPreferences.prototype, "setupFee", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalsetupfailureaction.PaypalSetupFeeFailureAction),
    (0, _classvalidator.IsEnum)(_paypalsetupfailureaction.PaypalSetupFeeFailureAction),
    _ts_metadata("design:type", typeof _paypalsetupfailureaction.PaypalSetupFeeFailureAction === "undefined" ? Object : _paypalsetupfailureaction.PaypalSetupFeeFailureAction)
], PaypalPaymentPreferences.prototype, "setupFeeFailureAction", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.Min)(1),
    (0, _classvalidator.Max)(999),
    _ts_metadata("design:type", Number)
], PaypalPaymentPreferences.prototype, "paymentFailureThreshold", void 0);
PaypalPaymentPreferences = _ts_decorate([
    (0, _graphql.InputType)()
], PaypalPaymentPreferences);

//# sourceMappingURL=paypal-payment-preferences.js.map