"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUniqeArrayObjets = void 0;
const class_validator_1 = require("class-validator");
const unique_array_objects_rule_1 = require("./unique-array-objects.rule");
function IsUniqeArrayObjets(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsUniqeArrayObjets',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: unique_array_objects_rule_1.UniqueArrayObjectsRule
        });
    };
}
exports.IsUniqeArrayObjets = IsUniqeArrayObjets;
//# sourceMappingURL=unique-array-objects.decorator.js.map