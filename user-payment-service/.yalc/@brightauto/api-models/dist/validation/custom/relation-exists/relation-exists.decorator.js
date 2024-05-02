"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationExists = void 0;
const class_validator_1 = require("class-validator");
const relation_exists_rule_1 = require("./relation-exists.rule");
function RelationExists(model, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'RelationExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [model],
            options: validationOptions,
            validator: relation_exists_rule_1.RelationExistsRule,
        });
    };
}
exports.RelationExists = RelationExists;
//# sourceMappingURL=relation-exists.decorator.js.map