"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Match", {
    enumerable: true,
    get: function() {
        return Match;
    }
});
const _classvalidator = require("class-validator");
function Match(property, validationOptions) {
    return (object, propertyName)=>{
        (0, _classvalidator.registerDecorator)({
            name: 'Match',
            target: object.constructor,
            propertyName,
            constraints: [
                property
            ],
            options: validationOptions,
            validator: {
                validate (value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return value == relatedValue;
                },
                defaultMessage (args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${propertyName} and ${relatedPropertyName} does not match`;
                }
            }
        });
    };
}

//# sourceMappingURL=match.validate.js.map