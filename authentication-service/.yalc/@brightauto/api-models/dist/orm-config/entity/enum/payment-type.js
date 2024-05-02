"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentType", {
    enumerable: true,
    get: function() {
        return PaymentType;
    }
});
const _graphql = require("@nestjs/graphql");
var PaymentType;
(function(PaymentType) {
    PaymentType["ONETIME"] = "ONETIME";
    PaymentType["SUBSCRIBE"] = "SUBSCRIBE";
})(PaymentType || (PaymentType = {}));
(0, _graphql.registerEnumType)(PaymentType, {
    name: 'PaymentType'
});

//# sourceMappingURL=payment-type.js.map