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
exports.PaypalSubscriptionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const paypal_product_type_1 = require("../../../../orm-config/entity/enum/paypal.product.type");
const paypal_billing_cycles_1 = require("./paypal/paypal-billing-cycles");
const paypal_payment_preferences_1 = require("./paypal/paypal-payment-preferences");
const paypal_subscription_taxes_1 = require("./paypal/paypal-subscription-taxes");
let PaypalSubscriptionInput = class PaypalSubscriptionInput {
};
__decorate([
    (0, graphql_1.Field)(() => paypal_product_type_1.PaypalProductType),
    (0, class_validator_1.IsEnum)(paypal_product_type_1.PaypalProductType),
    __metadata("design:type", String)
], PaypalSubscriptionInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaypalSubscriptionInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_billing_cycles_1.PaypalBillingCycles),
    (0, class_transformer_1.Type)(() => paypal_billing_cycles_1.PaypalBillingCycles),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_billing_cycles_1.PaypalBillingCycles)
], PaypalSubscriptionInput.prototype, "billingCycles", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_payment_preferences_1.PaypalPaymentPreferences),
    (0, class_transformer_1.Type)(() => paypal_payment_preferences_1.PaypalPaymentPreferences),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_payment_preferences_1.PaypalPaymentPreferences)
], PaypalSubscriptionInput.prototype, "paymentPreferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_subscription_taxes_1.PaypalSubscriptionTaxes),
    (0, class_transformer_1.Type)(() => paypal_subscription_taxes_1.PaypalSubscriptionTaxes),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_subscription_taxes_1.PaypalSubscriptionTaxes)
], PaypalSubscriptionInput.prototype, "taxes", void 0);
PaypalSubscriptionInput = __decorate([
    (0, graphql_1.InputType)()
], PaypalSubscriptionInput);
exports.PaypalSubscriptionInput = PaypalSubscriptionInput;
//# sourceMappingURL=paypal-subscription.input.js.map