"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameExists = void 0;
const class_validator_1 = require("class-validator");
const name_exists_rule_1 = require("./name-exists.rule");
function NameExists(model, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'NameExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [model],
            options: validationOptions,
            validator: name_exists_rule_1.NameExistsRule,
        });
    };
}
exports.NameExists = NameExists;
//# sourceMappingURL=name-exists.decorator.js.map