"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Action: function() {
        return _actionentity.Action;
    },
    Brand: function() {
        return _brandentity.Brand;
    },
    PaymentGateway: function() {
        return _paymentgatewayentity.PaymentGateway;
    },
    PaymentGatewayKey: function() {
        return _paymentgatewaykeyentity.PaymentGatewayKey;
    },
    PaymentGatewayPlan: function() {
        return _paymentgatewayplanentity.PaymentGatewayPlan;
    },
    PaymentPlan: function() {
        return _paymentplanentity.PaymentPlan;
    },
    Paypal: function() {
        return _paypalentity.Paypal;
    },
    RazorpayEntity: function() {
        return _razorpayentity.RazorpayEntity;
    },
    Role: function() {
        return _roleentity.Role;
    },
    StripeEntity: function() {
        return _stripeentity.StripeEntity;
    },
    User: function() {
        return _userentity.User;
    }
});
const _brandentity = require("./payment/brand.entity");
const _paymentgatewaykeyentity = require("./payment/payment-gateway-key.entity");
const _paymentgatewayplanentity = require("./payment/payment-gateway-plan.entity");
const _paymentgatewayentity = require("./payment/payment-gateway.entity");
const _paymentplanentity = require("./payment/payment-plan.entity");
const _paypalentity = require("./payment/paypal.entity");
const _razorpayentity = require("./payment/razorpay.entity");
const _stripeentity = require("./payment/stripe.entity");
const _actionentity = require("./authentication/action.entity");
const _roleentity = require("./authentication/role.entity");
const _userentity = require("./authentication/user.entity");

//# sourceMappingURL=all.entity.js.map