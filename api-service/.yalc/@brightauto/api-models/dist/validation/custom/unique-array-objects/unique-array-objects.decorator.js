"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IsUniqeArrayObjets", {
    enumerable: true,
    get: function() {
        return IsUniqeArrayObjets;
    }
});
const _classvalidator = require("class-validator");
const _uniquearrayobjectsrule = require("./unique-array-objects.rule");
function IsUniqeArrayObjets(property, validationOptions) {
    return (object, propertyName)=>{
        (0, _classvalidator.registerDecorator)({
            name: 'IsUniqeArrayObjets',
            target: object.constructor,
            propertyName,
            constraints: [
                property
            ],
            options: validationOptions,
            validator: _uniquearrayobjectsrule.UniqueArrayObjectsRule
        });
    };
}

//# sourceMappingURL=unique-array-objects.decorator.js.map