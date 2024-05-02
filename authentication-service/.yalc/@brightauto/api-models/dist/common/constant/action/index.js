"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "allActions", {
    enumerable: true,
    get: function() {
        return allActions;
    }
});
const _actionaction = require("./authentication/action.action");
const _roleaction = require("./authentication/role.action");
const _useradminaction = require("./authentication/user-admin.action");
const _userclientaction = require("./authentication/user-client.action");
const _brandaction = require("./payment/brand.action");
const _paymentgatewayplanaction = require("./payment/payment-gateway-plan.action");
const _paymentgatewayaction = require("./payment/payment-gateway.action");
const _paymentplanaction = require("./payment/payment-plan.action");
const _widgetaction = require("./payment/widget.action");
const allActions = [
    ..._actionaction.actionActions,
    ..._roleaction.roleActions,
    ..._useradminaction.userAdminActions,
    ..._userclientaction.userClientActions,
    ..._paymentplanaction.paymentPlanActions,
    ..._paymentgatewayaction.paymentGatewayActions,
    ..._brandaction.brandActions,
    ..._widgetaction.widgetActions,
    ..._paymentgatewayplanaction.paymentGatewayPlanActions
];

//# sourceMappingURL=index.js.map