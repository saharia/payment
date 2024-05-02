"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "actionLists", {
    enumerable: true,
    get: function() {
        return actionLists;
    }
});
const _actionaction = require("./action/authentication/action.action");
const _roleaction = require("./action/authentication/role.action");
const _useradminaction = require("./action/authentication/user-admin.action");
const _userclientaction = require("./action/authentication/user-client.action");
const _brandaction = require("./action/payment/brand.action");
const _paymentgatewayaction = require("./action/payment/payment-gateway.action");
const _paymentplanaction = require("./action/payment/payment-plan.action");
const _widgetaction = require("./action/payment/widget.action");
const _paymentaction = require("./action/user-payment/payment.action");
const actionLists = [
    ..._actionaction.actionActions,
    ..._roleaction.roleActions,
    ..._useradminaction.userAdminActions,
    ..._userclientaction.userClientActions,
    ..._brandaction.brandActions,
    ..._paymentgatewayaction.paymentGatewayActions,
    ..._paymentplanaction.paymentPlanActions,
    ..._widgetaction.widgetActions,
    ..._paymentaction.paymentActions
];

//# sourceMappingURL=action.constant.js.map