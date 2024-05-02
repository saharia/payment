"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "userAdminActions", {
    enumerable: true,
    get: function() {
        return userAdminActions;
    }
});
const _role = require("../../role");
const userAdminActions = [
    {
        id: "b9c53858-e0ff-4243-a58e-02bf2f4bb502",
        name: "user.admin.create",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "35b02470-24b5-4bf0-859a-37aed35d69b5",
        name: "user.admin.update",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "467ac664-b6ba-4c86-890b-bb79b4faf8e4",
        name: "user.admin.remove",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "e3eb09db-abcc-4aa3-a5ff-8484196ebd5e",
        name: "user.admin.findOne",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "42f7afb4-9a56-4a5d-9255-2ab9274c328a",
        name: "user.admin.findAll",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    }
];

//# sourceMappingURL=user-admin.action.js.map