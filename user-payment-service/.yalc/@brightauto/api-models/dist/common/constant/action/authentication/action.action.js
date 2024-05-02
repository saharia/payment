"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionActions = void 0;
const role_1 = require("../../role");
exports.actionActions = [
    {
        id: "1e5e2a2d-e7ac-4a22-ab0d-c958f4635390",
        name: "action.create",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "d0d787fb-4075-4964-8bf4-8c128c2e44f6",
        name: "action.update",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "ffc67995-016b-4dbf-bd49-1439c9994b7a",
        name: "action.remove",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "f3d232f3-bc62-414d-88d7-d83d8ca0d46c",
        name: "action.findOne",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "274ecf44-b1a8-4d1b-bf6d-83e476ebea7f",
        name: "action.findAll",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    }
];
//# sourceMappingURL=action.action.js.map