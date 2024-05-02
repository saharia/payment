"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentGatewayExists", {
    enumerable: true,
    get: function() {
        return PaymentGatewayExists;
    }
});
const _classvalidator = require("class-validator");
const _paymentgatewayexistsrule = require("./payment-gateway-exists.rule");
function PaymentGatewayExists(model, validationOptions) {
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: 'PaymentGatewayExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                model
            ],
            options: validationOptions,
            validator: _paymentgatewayexistsrule.PaymentGatewayExistsRule
        });
    };
}

//# sourceMappingURL=payment-gateway-exists.decorator.js.map