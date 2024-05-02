"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionInterval = void 0;
const graphql_1 = require("@nestjs/graphql");
var SubscriptionInterval;
(function (SubscriptionInterval) {
    SubscriptionInterval["DAILY"] = "DAILY";
    SubscriptionInterval["WEEKLY"] = "WEEKLY";
    SubscriptionInterval["MONTHLY"] = "MONTHLY";
    SubscriptionInterval["YEARLY"] = "YEARLY";
})(SubscriptionInterval = exports.SubscriptionInterval || (exports.SubscriptionInterval = {}));
(0, graphql_1.registerEnumType)(SubscriptionInterval, {
    name: 'SubscriptionInterval',
});
//# sourceMappingURL=subscription.interval.js.map