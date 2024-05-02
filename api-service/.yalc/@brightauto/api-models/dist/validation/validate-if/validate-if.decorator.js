"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidateIf", {
    enumerable: true,
    get: function() {
        return ValidateIf;
    }
});
const _classvalidator = require("class-validator");
const _paymentvalidateifrule = require("./payment/payment-validate-if.rule");
const _widgetvalidateifrule = require("./widget/widget-validate-if.rule");
function ValidateIf(model, validationOptions) {
    let rule = _widgetvalidateifrule.WidgetValidateIfRule;
    if (model[1] && model[1] == 'payment') {
        rule = _paymentvalidateifrule.PaymentValidateIfRule;
    }
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: 'ValidateIf',
            target: object.constructor,
            propertyName: propertyName,
            constraints: model,
            options: validationOptions,
            validator: rule
        });
    };
}

//# sourceMappingURL=validate-if.decorator.js.map