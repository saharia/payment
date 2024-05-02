"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BrandGatewayExists", {
    enumerable: true,
    get: function() {
        return BrandGatewayExists;
    }
});
const _classvalidator = require("class-validator");
const _brandgatewayexistsrule = require("./brand-gateway-exists.rule");
function BrandGatewayExists(validationOptions) {
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: 'BrandGatewayExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: _brandgatewayexistsrule.BrandGatewayExistsRule
        });
    };
}

//# sourceMappingURL=brand-gateway-exists.decorator.js.map