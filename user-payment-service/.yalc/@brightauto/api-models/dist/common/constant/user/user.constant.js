"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const role_1 = require("../role");
exports.users = [
    {
        id: "9af588a4-0632-4014-8b10-375f16316e67",
        email: "superadmin@mail.com",
        firstName: "Super Admin",
        lastName: "User",
        password: "password",
        roles: [
            role_1.allRoles.superadmin
        ]
    },
    {
        id: "8533204c-f674-403c-9e3c-72462fb4e242",
        email: "admin@mail.com",
        firstName: "Admin",
        lastName: "User",
        password: "password",
        roles: [
            role_1.allRoles.admin
        ]
    },
    {
        id: "9f05c6c8-71b4-4fc6-b694-57464ddd6abd",
        email: "client@mail.com",
        firstName: "Client",
        lastName: "User",
        password: "password",
        roles: [
            role_1.allRoles.client
        ]
    }
];
//# sourceMappingURL=user.constant.js.map