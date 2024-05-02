"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SubscriptionInterval", {
    enumerable: true,
    get: function() {
        return SubscriptionInterval;
    }
});
const _graphql = require("@nestjs/graphql");
var SubscriptionInterval;
(function(SubscriptionInterval) {
    SubscriptionInterval["DAILY"] = "DAILY";
    SubscriptionInterval["WEEKLY"] = "WEEKLY";
    SubscriptionInterval["MONTHLY"] = "MONTHLY";
    SubscriptionInterval["YEARLY"] = "YEARLY";
})(SubscriptionInterval || (SubscriptionInterval = {}));
(0, _graphql.registerEnumType)(SubscriptionInterval, {
    name: 'SubscriptionInterval'
});

//# sourceMappingURL=subscription.interval.js.map