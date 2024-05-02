"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentMode", {
    enumerable: true,
    get: function() {
        return PaymentMode;
    }
});
const _graphql = require("@nestjs/graphql");
var PaymentMode;
(function(PaymentMode) {
    PaymentMode["SANDBOX"] = "SANDBOX";
    PaymentMode["LIVE"] = "LIVE";
})(PaymentMode || (PaymentMode = {}));
(0, _graphql.registerEnumType)(PaymentMode, {
    name: 'PaymentMode'
});

//# sourceMappingURL=payment-mode.js.map