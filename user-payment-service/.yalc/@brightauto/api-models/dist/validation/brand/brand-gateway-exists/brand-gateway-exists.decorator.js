"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandGatewayExists = void 0;
const class_validator_1 = require("class-validator");
const brand_gateway_exists_rule_1 = require("./brand-gateway-exists.rule");
function BrandGatewayExists(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'BrandGatewayExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: brand_gateway_exists_rule_1.BrandGatewayExistsRule,
        });
    };
}
exports.BrandGatewayExists = BrandGatewayExists;
//# sourceMappingURL=brand-gateway-exists.decorator.js.map