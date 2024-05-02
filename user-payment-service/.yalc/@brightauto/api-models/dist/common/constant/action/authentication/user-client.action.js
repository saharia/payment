"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userClientActions = void 0;
const role_1 = require("../../role");
exports.userClientActions = [
    {
        id: "ca843338-77f6-40a2-9c93-7a5b424971cb",
        name: "user.client.create",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "741e6880-2caf-49e3-bf38-6cd7e2321801",
        name: "user.client.update",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "0a384d60-21fc-4c62-aa1b-ecd133afef62",
        name: "user.client.remove",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "03dd7fb8-1526-481f-b247-c0d4e7e78581",
        name: "user.client.findOne",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "ab635ed3-2e37-4f59-b34c-58032ebc2bb5",
        name: "user.client.findAll",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.superadmin
        ]
    }
];
//# sourceMappingURL=user-client.action.js.map