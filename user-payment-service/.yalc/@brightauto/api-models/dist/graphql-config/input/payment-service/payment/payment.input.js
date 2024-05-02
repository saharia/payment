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
exports.PaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_mode_1 = require("../../../../orm-config/entity/enum/payment-mode");
const payment_type_1 = require("../../../../orm-config/entity/enum/payment-type");
const brand_entity_1 = require("../../../../orm-config/entity/payment/brand.entity");
const payment_gateway_entity_1 = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const brand_gateway_exists_decorator_1 = require("../../../../validation/brand/brand-gateway-exists/brand-gateway-exists.decorator");
const relation_exists_decorator_1 = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
const validate_if_decorator_1 = require("../../../../validation/validate-if/validate-if.decorator");
const paypal_subscription_input_1 = require("./paypal-subscription.input");
const razorpay_subscription_input_1 = require("./razorpay-subscription.input");
const stripe_subscription_input_1 = require("./stripe-subscription.input");
let PaymentInput = class PaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(4),
    (0, relation_exists_decorator_1.RelationExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], PaymentInput.prototype, "paymentGatewayId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(4),
    (0, relation_exists_decorator_1.RelationExists)(brand_entity_1.Brand),
    (0, brand_gateway_exists_decorator_1.BrandGatewayExists)(),
    __metadata("design:type", String)
], PaymentInput.prototype, "primaryBrandId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(4),
    (0, relation_exists_decorator_1.RelationExists)(brand_entity_1.Brand),
    __metadata("design:type", String)
], PaymentInput.prototype, "secondaryBrandId", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_mode_1.PaymentMode),
    (0, class_validator_1.IsEnum)(payment_mode_1.PaymentMode),
    __metadata("design:type", String)
], PaymentInput.prototype, "paymentMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_type_1.PaymentType),
    (0, class_validator_1.IsEnum)(payment_type_1.PaymentType),
    __metadata("design:type", String)
], PaymentInput.prototype, "paymentType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentInput.prototype, "returnUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentInput.prototype, "cancelUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaymentInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentInput.prototype, "currency", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentInput.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_subscription_input_1.PaypalSubscriptionInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => paypal_subscription_input_1.PaypalSubscriptionInput),
    (0, validate_if_decorator_1.ValidateIf)(['paypal', 'payment']),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_subscription_input_1.PaypalSubscriptionInput)
], PaymentInput.prototype, "paypalSubscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => stripe_subscription_input_1.StripeSubscriptionInput, { nullable: true }),
    (0, validate_if_decorator_1.ValidateIf)(['stripe', 'payment']),
    (0, class_transformer_1.Type)(() => stripe_subscription_input_1.StripeSubscriptionInput),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", stripe_subscription_input_1.StripeSubscriptionInput)
], PaymentInput.prototype, "stripeSubscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => razorpay_subscription_input_1.RazorpaySubscriptionInput, { nullable: true }),
    (0, validate_if_decorator_1.ValidateIf)(['razorpay', 'payment']),
    (0, class_transformer_1.Type)(() => razorpay_subscription_input_1.RazorpaySubscriptionInput),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", razorpay_subscription_input_1.RazorpaySubscriptionInput)
], PaymentInput.prototype, "razorpaySubscription", void 0);
PaymentInput = __decorate([
    (0, graphql_1.InputType)()
], PaymentInput);
exports.PaymentInput = PaymentInput;
//# sourceMappingURL=payment.input.js.map