"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "userClientActions", {
    enumerable: true,
    get: function() {
        return userClientActions;
    }
});
const _role = require("../../role");
const userClientActions = [
    {
        id: "ca843338-77f6-40a2-9c93-7a5b424971cb",
        name: "user.client.create",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "741e6880-2caf-49e3-bf38-6cd7e2321801",
        name: "user.client.update",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "0a384d60-21fc-4c62-aa1b-ecd133afef62",
        name: "user.client.remove",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "03dd7fb8-1526-481f-b247-c0d4e7e78581",
        name: "user.client.findOne",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "ab635ed3-2e37-4f59-b34c-58032ebc2bb5",
        name: "user.client.findAll",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    }
];

//# sourceMappingURL=user-client.action.js.map