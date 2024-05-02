"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaypalProductType", {
    enumerable: true,
    get: function() {
        return PaypalProductType;
    }
});
const _graphql = require("@nestjs/graphql");
var PaypalProductType;
(function(PaypalProductType) {
    PaypalProductType["PHYSICAL"] = "PHYSICAL";
    PaypalProductType["DIGITAL"] = "DIGITAL";
    PaypalProductType["SERVICE"] = "SERVICE";
})(PaypalProductType || (PaypalProductType = {}));
(0, _graphql.registerEnumType)(PaypalProductType, {
    name: 'PaypalProductType'
});

//# sourceMappingURL=paypal.product.type.js.map