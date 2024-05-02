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
exports.CreateWidgetInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_mode_1 = require("../../../../orm-config/entity/enum/payment-mode");
const payment_type_1 = require("../../../../orm-config/entity/enum/payment-type");
const payment_gateway_entity_1 = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const relation_exists_decorator_1 = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
const validate_if_decorator_1 = require("../../../../validation/validate-if/validate-if.decorator");
const paypal_subscription_input_1 = require("../payment/paypal-subscription.input");
const razorpay_subscription_input_1 = require("../payment/razorpay-subscription.input");
const stripe_subscription_input_1 = require("../payment/stripe-subscription.input");
let CreateWidgetInput = class CreateWidgetInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWidgetInput.prototype, "companyName", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_mode_1.PaymentMode),
    (0, class_validator_1.IsEnum)(payment_mode_1.PaymentMode),
    __metadata("design:type", String)
], CreateWidgetInput.prototype, "paymentMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_type_1.PaymentType),
    (0, class_validator_1.IsEnum)(payment_type_1.PaymentType),
    __metadata("design:type", String)
], CreateWidgetInput.prototype, "paymentType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWidgetInput.prototype, "planName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, relation_exists_decorator_1.RelationExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", Array)
], CreateWidgetInput.prototype, "paymentGatewayIds", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_subscription_input_1.PaypalSubscriptionInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => paypal_subscription_input_1.PaypalSubscriptionInput),
    (0, validate_if_decorator_1.ValidateIf)(['paypal']),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_subscription_input_1.PaypalSubscriptionInput)
], CreateWidgetInput.prototype, "paypalSubscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => stripe_subscription_input_1.StripeSubscriptionInput, { nullable: true }),
    (0, validate_if_decorator_1.ValidateIf)(['stripe']),
    (0, class_transformer_1.Type)(() => stripe_subscription_input_1.StripeSubscriptionInput),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", stripe_subscription_input_1.StripeSubscriptionInput)
], CreateWidgetInput.prototype, "stripeSubscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => razorpay_subscription_input_1.RazorpaySubscriptionInput, { nullable: true }),
    (0, validate_if_decorator_1.ValidateIf)(['razorpay']),
    (0, class_transformer_1.Type)(() => razorpay_subscription_input_1.RazorpaySubscriptionInput),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", razorpay_subscription_input_1.RazorpaySubscriptionInput)
], CreateWidgetInput.prototype, "razorpaySubscription", void 0);
CreateWidgetInput = __decorate([
    (0, graphql_1.InputType)()
], CreateWidgetInput);
exports.CreateWidgetInput = CreateWidgetInput;
//# sourceMappingURL=create-widget.input.js.map