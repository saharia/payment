"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "actionActions", {
    enumerable: true,
    get: function() {
        return actionActions;
    }
});
const _role = require("../../role");
const actionActions = [
    {
        id: "1e5e2a2d-e7ac-4a22-ab0d-c958f4635390",
        name: "action.create",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "d0d787fb-4075-4964-8bf4-8c128c2e44f6",
        name: "action.update",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "ffc67995-016b-4dbf-bd49-1439c9994b7a",
        name: "action.remove",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "f3d232f3-bc62-414d-88d7-d83d8ca0d46c",
        name: "action.findOne",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "274ecf44-b1a8-4d1b-bf6d-83e476ebea7f",
        name: "action.findAll",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    }
];

//# sourceMappingURL=action.action.js.map