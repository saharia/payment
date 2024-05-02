"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalPaymentPreferences = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const paypal_setup_failure_action_1 = require("../../../../../orm-config/entity/enum/paypal.setup-failure-action");
const paypal_setup_fee_1 = require("./paypal-setup-fee");
let PaypalPaymentPreferences = class PaypalPaymentPreferences {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PaypalPaymentPreferences.prototype, "autoBillOutstanding", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_setup_fee_1.PaypalSetupFee),
    (0, class_transformer_1.Type)(() => paypal_setup_fee_1.PaypalSetupFee),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_setup_fee_1.PaypalSetupFee)
], PaypalPaymentPreferences.prototype, "setupFee", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_setup_failure_action_1.PaypalSetupFeeFailureAction),
    (0, class_validator_1.IsEnum)(paypal_setup_failure_action_1.PaypalSetupFeeFailureAction),
    __metadata("design:type", String)
], PaypalPaymentPreferences.prototype, "setupFeeFailureAction", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(999),
    __metadata("design:type", Number)
], PaypalPaymentPreferences.prototype, "paymentFailureThreshold", void 0);
PaypalPaymentPreferences = __decorate([
    (0, graphql_1.InputType)()
], PaypalPaymentPreferences);
exports.PaypalPaymentPreferences = PaypalPaymentPreferences;
//# sourceMappingURL=paypal-payment-preferences.js.map