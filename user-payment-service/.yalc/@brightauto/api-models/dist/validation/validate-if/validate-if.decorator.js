"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateIf = void 0;
const class_validator_1 = require("class-validator");
const payment_validate_if_rule_1 = require("./payment/payment-validate-if.rule");
const widget_validate_if_rule_1 = require("./widget/widget-validate-if.rule");
function ValidateIf(model, validationOptions) {
    let rule = widget_validate_if_rule_1.WidgetValidateIfRule;
    if (model[1] && model[1] == 'payment') {
        rule = payment_validate_if_rule_1.PaymentValidateIfRule;
    }
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'ValidateIf',
            target: object.constructor,
            propertyName: propertyName,
            constraints: model,
            options: validationOptions,
            validator: rule,
        });
    };
}
exports.ValidateIf = ValidateIf;
//# sourceMappingURL=validate-if.decorator.js.map