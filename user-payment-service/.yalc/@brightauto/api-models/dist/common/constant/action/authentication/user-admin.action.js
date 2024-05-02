"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAdminActions = void 0;
const role_1 = require("../../role");
exports.userAdminActions = [
    {
        id: "b9c53858-e0ff-4243-a58e-02bf2f4bb502",
        name: "user.admin.create",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "35b02470-24b5-4bf0-859a-37aed35d69b5",
        name: "user.admin.update",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "467ac664-b6ba-4c86-890b-bb79b4faf8e4",
        name: "user.admin.remove",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "e3eb09db-abcc-4aa3-a5ff-8484196ebd5e",
        name: "user.admin.findOne",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "42f7afb4-9a56-4a5d-9255-2ab9274c328a",
        name: "user.admin.findAll",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    }
];
//# sourceMappingURL=user-admin.action.js.map