"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionLists = void 0;
const action_action_1 = require("./action/authentication/action.action");
const role_action_1 = require("./action/authentication/role.action");
const user_admin_action_1 = require("./action/authentication/user-admin.action");
const user_client_action_1 = require("./action/authentication/user-client.action");
const brand_action_1 = require("./action/payment/brand.action");
const payment_gateway_action_1 = require("./action/payment/payment-gateway.action");
const payment_plan_action_1 = require("./action/payment/payment-plan.action");
const widget_action_1 = require("./action/payment/widget.action");
const payment_action_1 = require("./action/user-payment/payment.action");
exports.actionLists = [
    ...action_action_1.actionActions,
    ...role_action_1.roleActions,
    ...user_admin_action_1.userAdminActions,
    ...user_client_action_1.userClientActions,
    ...brand_action_1.brandActions,
    ...payment_gateway_action_1.paymentGatewayActions,
    ...payment_plan_action_1.paymentPlanActions,
    ...widget_action_1.widgetActions,
    ...payment_action_1.paymentActions
];
//# sourceMappingURL=action.constant.js.map