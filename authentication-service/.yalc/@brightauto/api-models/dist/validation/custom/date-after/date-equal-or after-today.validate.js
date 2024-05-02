"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IsDateEqualOrAfterToday", {
    enumerable: true,
    get: function() {
        return IsDateEqualOrAfterToday;
    }
});
const _classvalidator = require("class-validator");
const _moment = /*#__PURE__*/ _interop_require_wildcard(require("moment"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function IsDateEqualOrAfterToday(property, validationOptions) {
    return (object, propertyName)=>{
        (0, _classvalidator.registerDecorator)({
            name: 'IsDateEqualOrAfterToday',
            target: object.constructor,
            propertyName,
            constraints: [
                property
            ],
            options: validationOptions,
            validator: {
                validate (value, args) {
                    console.log("here");
                    const date = _moment(value);
                    const startDate = _moment();
                    console.log(date.format(), startDate.format());
                    return date.isSameOrAfter(startDate, 'date');
                },
                defaultMessage (args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${propertyName} should be greater than or equal to ${_moment().toDate()}`;
                }
            }
        });
    };
}

//# sourceMappingURL=date-equal-or after-today.validate.js.map