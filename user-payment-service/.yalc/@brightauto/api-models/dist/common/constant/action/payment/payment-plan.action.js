"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPlanActions = void 0;
const role_1 = require("../../role");
exports.paymentPlanActions = [
    {
        id: "4c1c3657-65da-4c86-be60-445e8630fe26",
        name: "paymentPlan.create",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "1bd64e58-7ff2-4dcd-aab6-b34bef746b22",
        name: "paymentPlan.update",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "e696f181-2291-4528-9421-5421304bdd7e",
        name: "paymentPlan.remove",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "100c887e-92b6-41b9-aef8-f43455a17f79",
        name: "paymentPlan.findOne",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "df16e2ff-9bb4-4635-8eb8-9782cdcee41b",
        name: "paymentPlan.findAll",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.client
        ]
    }
];
//# sourceMappingURL=payment-plan.action.js.map