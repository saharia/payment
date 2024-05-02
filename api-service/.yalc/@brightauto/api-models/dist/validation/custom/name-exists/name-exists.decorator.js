"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NameExists", {
    enumerable: true,
    get: function() {
        return NameExists;
    }
});
const _classvalidator = require("class-validator");
const _nameexistsrule = require("./name-exists.rule");
function NameExists(model, validationOptions) {
    return function(object, propertyName) {
        (0, _classvalidator.registerDecorator)({
            name: 'NameExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                model
            ],
            options: validationOptions,
            validator: _nameexistsrule.NameExistsRule
        });
    };
}

//# sourceMappingURL=name-exists.decorator.js.map