"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = void 0;
const graphql_1 = require("@nestjs/graphql");
var PaymentType;
(function (PaymentType) {
    PaymentType["ONETIME"] = "ONETIME";
    PaymentType["SUBSCRIBE"] = "SUBSCRIBE";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
(0, graphql_1.registerEnumType)(PaymentType, {
    name: 'PaymentType',
});
//# sourceMappingURL=payment-type.js.map