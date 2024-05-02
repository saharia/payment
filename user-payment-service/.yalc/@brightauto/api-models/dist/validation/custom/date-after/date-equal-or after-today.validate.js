"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateEqualOrAfterToday = void 0;
const class_validator_1 = require("class-validator");
const moment = require("moment");
function IsDateEqualOrAfterToday(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsDateEqualOrAfterToday',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    console.log("here");
                    const date = moment(value);
                    const startDate = moment();
                    console.log(date.format(), startDate.format());
                    return date.isSameOrAfter(startDate, 'date');
                },
                defaultMessage(args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${propertyName} should be greater than or equal to ${moment().toDate()}`;
                },
            },
        });
    };
}
exports.IsDateEqualOrAfterToday = IsDateEqualOrAfterToday;
//# sourceMappingURL=date-equal-or%20after-today.validate.js.map