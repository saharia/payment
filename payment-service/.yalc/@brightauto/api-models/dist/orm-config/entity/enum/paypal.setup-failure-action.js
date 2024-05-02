"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaypalSetupFeeFailureAction", {
    enumerable: true,
    get: function() {
        return PaypalSetupFeeFailureAction;
    }
});
const _graphql = require("@nestjs/graphql");
var PaypalSetupFeeFailureAction;
(function(PaypalSetupFeeFailureAction) {
    PaypalSetupFeeFailureAction["CONTINUE"] = "CONTINUE";
    PaypalSetupFeeFailureAction["CANCEL"] = "CANCEL";
})(PaypalSetupFeeFailureAction || (PaypalSetupFeeFailureAction = {}));
(0, _graphql.registerEnumType)(PaypalSetupFeeFailureAction, {
    name: 'PaypalSetupFeeFailureAction'
});

//# sourceMappingURL=paypal.setup-failure-action.js.map