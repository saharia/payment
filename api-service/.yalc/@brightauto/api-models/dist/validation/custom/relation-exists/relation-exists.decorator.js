"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RelationExists", {
    enumerable: true,
    get: function() {
        return RelationExists;
    }
});
const _classvalidator = require("class-validator");
const _relationexistsrule = require("./relation-exists.rule");
function RelationExists(model, validationOptions) {
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: 'RelationExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                model
            ],
            options: validationOptions,
            validator: _relationexistsrule.RelationExistsRule
        });
    };
}

//# sourceMappingURL=relation-exists.decorator.js.map