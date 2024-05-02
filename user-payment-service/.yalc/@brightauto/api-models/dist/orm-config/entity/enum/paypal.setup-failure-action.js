"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalSetupFeeFailureAction = void 0;
const graphql_1 = require("@nestjs/graphql");
var PaypalSetupFeeFailureAction;
(function (PaypalSetupFeeFailureAction) {
    PaypalSetupFeeFailureAction["CONTINUE"] = "CONTINUE";
    PaypalSetupFeeFailureAction["CANCEL"] = "CANCEL";
})(PaypalSetupFeeFailureAction = exports.PaypalSetupFeeFailureAction || (exports.PaypalSetupFeeFailureAction = {}));
(0, graphql_1.registerEnumType)(PaypalSetupFeeFailureAction, {
    name: 'PaypalSetupFeeFailureAction',
});
//# sourceMappingURL=paypal.setup-failure-action.js.map