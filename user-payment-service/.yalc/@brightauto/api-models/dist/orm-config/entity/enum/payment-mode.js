"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMode = void 0;
const graphql_1 = require("@nestjs/graphql");
var PaymentMode;
(function (PaymentMode) {
    PaymentMode["SANDBOX"] = "SANDBOX";
    PaymentMode["LIVE"] = "LIVE";
})(PaymentMode = exports.PaymentMode || (exports.PaymentMode = {}));
(0, graphql_1.registerEnumType)(PaymentMode, {
    name: 'PaymentMode',
});
//# sourceMappingURL=payment-mode.js.map