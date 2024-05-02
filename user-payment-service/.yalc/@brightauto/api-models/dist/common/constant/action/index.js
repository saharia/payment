"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allActions = void 0;
const action_action_1 = require("./authentication/action.action");
const role_action_1 = require("./authentication/role.action");
const user_admin_action_1 = require("./authentication/user-admin.action");
const user_client_action_1 = require("./authentication/user-client.action");
const brand_action_1 = require("./payment/brand.action");
const payment_gateway_plan_action_1 = require("./payment/payment-gateway-plan.action");
const payment_gateway_action_1 = require("./payment/payment-gateway.action");
const payment_plan_action_1 = require("./payment/payment-plan.action");
const widget_action_1 = require("./payment/widget.action");
exports.allActions = [
    ...action_action_1.actionActions,
    ...role_action_1.roleActions,
    ...user_admin_action_1.userAdminActions,
    ...user_client_action_1.userClientActions,
    ...payment_plan_action_1.paymentPlanActions,
    ...payment_gateway_action_1.paymentGatewayActions,
    ...brand_action_1.brandActions,
    ...widget_action_1.widgetActions,
    ...payment_gateway_plan_action_1.paymentGatewayPlanActions
];
//# sourceMappingURL=index.js.map