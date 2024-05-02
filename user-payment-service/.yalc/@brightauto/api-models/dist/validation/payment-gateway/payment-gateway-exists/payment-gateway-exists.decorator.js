"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayExists = void 0;
const class_validator_1 = require("class-validator");
const payment_gateway_exists_rule_1 = require("./payment-gateway-exists.rule");
function PaymentGatewayExists(model, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'PaymentGatewayExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [model],
            options: validationOptions,
            validator: payment_gateway_exists_rule_1.PaymentGatewayExistsRule,
        });
    };
}
exports.PaymentGatewayExists = PaymentGatewayExists;
//# sourceMappingURL=payment-gateway-exists.decorator.js.map