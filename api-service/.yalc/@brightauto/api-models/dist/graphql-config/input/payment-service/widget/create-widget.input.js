"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateWidgetInput", {
    enumerable: true,
    get: function() {
        return CreateWidgetInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paymentmode = require("../../../../orm-config/entity/enum/payment-mode");
const _paymenttype = require("../../../../orm-config/entity/enum/payment-type");
const _paymentgatewayentity = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const _relationexistsdecorator = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
const _validateifdecorator = require("../../../../validation/validate-if/validate-if.decorator");
const _paypalsubscriptioninput = require("../payment/paypal-subscription.input");
const _razorpaysubscriptioninput = require("../payment/razorpay-subscription.input");
const _stripesubscriptioninput = require("../payment/stripe-subscription.input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateWidgetInput = class CreateWidgetInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateWidgetInput.prototype, "companyName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymentmode.PaymentMode),
    (0, _classvalidator.IsEnum)(_paymentmode.PaymentMode),
    _ts_metadata("design:type", typeof _paymentmode.PaymentMode === "undefined" ? Object : _paymentmode.PaymentMode)
], CreateWidgetInput.prototype, "paymentMode", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paymenttype.PaymentType),
    (0, _classvalidator.IsEnum)(_paymenttype.PaymentType),
    _ts_metadata("design:type", typeof _paymenttype.PaymentType === "undefined" ? Object : _paymenttype.PaymentType)
], CreateWidgetInput.prototype, "paymentType", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateWidgetInput.prototype, "planName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            String
        ]),
    (0, _classvalidator.IsArray)(),
    (0, _classvalidator.ArrayMinSize)(1),
    (0, _relationexistsdecorator.RelationExists)(_paymentgatewayentity.PaymentGateway),
    _ts_metadata("design:type", Array)
], CreateWidgetInput.prototype, "paymentGatewayIds", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalsubscriptioninput.PaypalSubscriptionInput, {
        nullable: true
    }),
    (0, _classtransformer.Type)(()=>_paypalsubscriptioninput.PaypalSubscriptionInput),
    (0, _validateifdecorator.ValidateIf)([
        'paypal'
    ]),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalsubscriptioninput.PaypalSubscriptionInput === "undefined" ? Object : _paypalsubscriptioninput.PaypalSubscriptionInput)
], CreateWidgetInput.prototype, "paypalSubscription", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_stripesubscriptioninput.StripeSubscriptionInput, {
        nullable: true
    }),
    (0, _validateifdecorator.ValidateIf)([
        'stripe'
    ]),
    (0, _classtransformer.Type)(()=>_stripesubscriptioninput.StripeSubscriptionInput),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _stripesubscriptioninput.StripeSubscriptionInput === "undefined" ? Object : _stripesubscriptioninput.StripeSubscriptionInput)
], CreateWidgetInput.prototype, "stripeSubscription", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_razorpaysubscriptioninput.RazorpaySubscriptionInput, {
        nullable: true
    }),
    (0, _validateifdecorator.ValidateIf)([
        'razorpay'
    ]),
    (0, _classtransformer.Type)(()=>_razorpaysubscriptioninput.RazorpaySubscriptionInput),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _razorpaysubscriptioninput.RazorpaySubscriptionInput === "undefined" ? Object : _razorpaysubscriptioninput.RazorpaySubscriptionInput)
], CreateWidgetInput.prototype, "razorpaySubscription", void 0);
CreateWidgetInput = _ts_decorate([
    (0, _graphql.InputType)()
], CreateWidgetInput);

//# sourceMappingURL=create-widget.input.js.map