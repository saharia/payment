"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentInput", {
    enumerable: true,
    get: function() {
        return PaymentInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paymentmode = require("../../../../orm-config/entity/enum/payment-mode");
const _paymenttype = require("../../../../orm-config/entity/enum/payment-type");
const _brandentity = require("../../../../orm-config/entity/payment/brand.entity");
const _paymentgatewayentity = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const _brandgatewayexistsdecorator = require("../../../../validation/brand/brand-gateway-exists/brand-gateway-exists.decorator");
const _relationexistsdecorator = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
const _validateifdecorator = require("../../../../validation/validate-if/validate-if.decorator");
const _paypalsubscriptioninput = require("./paypal-subscription.input");
const _razorpaysubscriptioninput = require("./razorpay-subscription.input");
const _stripesubscriptioninput = require("./stripe-subscription.input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaymentInput = class PaymentInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUUID)(4),
    (0, _relationexistsdecorator.RelationExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "paymentGatewayId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUUID)(4),
    (0, _relationexistsdecorator.RelationExists)(_brandentity.Brand),
    (0, _brandgatewayexistsdecorator.BrandGatewayExists)(),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "primaryBrandId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUUID)(4),
    (0, _relationexistsdecorator.RelationExists)(_brandentity.Brand),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "secondaryBrandId", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentmode.PaymentMode),
    (0, _classvalidator.IsEnum)(_paymentmode.PaymentMode),
    _ts_metadata("design:type", typeof _paymentmode.PaymentMode === "undefined" ? Object : _paymentmode.PaymentMode)
], PaymentInput.prototype, "paymentMode", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymenttype.PaymentType),
    (0, _classvalidator.IsEnum)(_paymenttype.PaymentType),
    _ts_metadata("design:type", typeof _paymenttype.PaymentType === "undefined" ? Object : _paymenttype.PaymentType)
], PaymentInput.prototype, "paymentType", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "returnUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "cancelUrl", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], PaymentInput.prototype, "amount", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "currency", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], PaymentInput.prototype, "token", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalsubscriptioninput.PaypalSubscriptionInput, {
        nullable: true
    }),
    (0, _classtransformer.Type)(()=>_paypalsubscriptioninput.PaypalSubscriptionInput),
    (0, _validateifdecorator.ValidateIf)([
        'paypal',
        'payment'
    ]),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalsubscriptioninput.PaypalSubscriptionInput === "undefined" ? Object : _paypalsubscriptioninput.PaypalSubscriptionInput)
], PaymentInput.prototype, "paypalSubscription", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_stripesubscriptioninput.StripeSubscriptionInput, {
        nullable: true
    }),
    (0, _validateifdecorator.ValidateIf)([
        'stripe',
        'payment'
    ]),
    (0, _classtransformer.Type)(()=>_stripesubscriptioninput.StripeSubscriptionInput),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _stripesubscriptioninput.StripeSubscriptionInput === "undefined" ? Object : _stripesubscriptioninput.StripeSubscriptionInput)
], PaymentInput.prototype, "stripeSubscription", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_razorpaysubscriptioninput.RazorpaySubscriptionInput, {
        nullable: true
    }),
    (0, _validateifdecorator.ValidateIf)([
        'razorpay',
        'payment'
    ]),
    (0, _classtransformer.Type)(()=>_razorpaysubscriptioninput.RazorpaySubscriptionInput),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _razorpaysubscriptioninput.RazorpaySubscriptionInput === "undefined" ? Object : _razorpaysubscriptioninput.RazorpaySubscriptionInput)
], PaymentInput.prototype, "razorpaySubscription", void 0);
PaymentInput = _ts_decorate([
    (0, _graphql.InputType)()
], PaymentInput);

//# sourceMappingURL=payment.input.js.map