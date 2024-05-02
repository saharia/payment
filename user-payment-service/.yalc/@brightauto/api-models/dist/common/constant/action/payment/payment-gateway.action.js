"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentGatewayActions = void 0;
const role_1 = require("../../role");
exports.paymentGatewayActions = [
    {
        id: "bdcba05f-6855-4033-aa99-19ac755250df",
        name: "paymentGateway.create",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "62ab2953-b7b9-4ead-9cfa-7d4a294e2c08",
        name: "paymentGateway.update",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "a0dadcea-f512-450f-9999-15bdfc25ee54",
        name: "paymentGateway.remove",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "abd582a5-e37b-4d92-a501-a8fcf729ec8e",
        name: "paymentGateway.findOne",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "1c5b3ecd-9c16-444c-86b9-3f09cff665ba",
        name: "paymentGateway.findAll",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.client
        ]
    }
];
//# sourceMappingURL=payment-gateway.action.js.map