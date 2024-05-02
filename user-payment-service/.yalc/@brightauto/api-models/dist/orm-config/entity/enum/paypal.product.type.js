"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalProductType = void 0;
const graphql_1 = require("@nestjs/graphql");
var PaypalProductType;
(function (PaypalProductType) {
    PaypalProductType["PHYSICAL"] = "PHYSICAL";
    PaypalProductType["DIGITAL"] = "DIGITAL";
    PaypalProductType["SERVICE"] = "SERVICE";
})(PaypalProductType = exports.PaypalProductType || (exports.PaypalProductType = {}));
(0, graphql_1.registerEnumType)(PaypalProductType, {
    name: 'PaypalProductType',
});
//# sourceMappingURL=paypal.product.type.js.map