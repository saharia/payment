"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColumnExists", {
    enumerable: true,
    get: function() {
        return ColumnExists;
    }
});
const _classvalidator = require("class-validator");
const _columnexistsrule = require("./column-exists.rule");
function ColumnExists(model, validationOptions) {
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: 'ColumnExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                model
            ],
            options: validationOptions,
            validator: _columnexistsrule.ColumnExistsRule
        });
    };
}

//# sourceMappingURL=column-exists.decorator.js.map