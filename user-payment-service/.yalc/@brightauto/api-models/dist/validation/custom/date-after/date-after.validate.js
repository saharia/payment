"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateAfter = void 0;
const class_validator_1 = require("class-validator");
const moment = require("moment");
function IsDateAfter(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsDateAfter',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    const endDate = moment(value);
                    const startDate = moment(relatedValue);
                    return endDate.isSameOrAfter(startDate, 'date');
                },
                defaultMessage(args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${propertyName} should be greater than or equal to ${relatedPropertyName}`;
                },
            },
        });
    };
}
exports.IsDateAfter = IsDateAfter;
//# sourceMappingURL=date-after.validate.js.map