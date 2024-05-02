"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnExists = void 0;
const class_validator_1 = require("class-validator");
const column_exists_rule_1 = require("./column-exists.rule");
function ColumnExists(model, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'ColumnExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [model],
            options: validationOptions,
            validator: column_exists_rule_1.ColumnExistsRule,
        });
    };
}
exports.ColumnExists = ColumnExists;
//# sourceMappingURL=column-exists.decorator.js.map