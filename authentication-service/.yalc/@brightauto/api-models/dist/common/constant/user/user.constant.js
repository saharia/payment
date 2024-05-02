"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "users", {
    enumerable: true,
    get: function() {
        return users;
    }
});
const _role = require("../role");
const users = [
    {
        id: "9af588a4-0632-4014-8b10-375f16316e67",
        email: "superadmin@mail.com",
        firstName: "Super Admin",
        lastName: "User",
        password: "password",
        roles: [
            _role.allRoles.superadmin
        ]
    },
    {
        id: "8533204c-f674-403c-9e3c-72462fb4e242",
        email: "admin@mail.com",
        firstName: "Admin",
        lastName: "User",
        password: "password",
        roles: [
            _role.allRoles.admin
        ]
    },
    {
        id: "9f05c6c8-71b4-4fc6-b694-57464ddd6abd",
        email: "client@mail.com",
        firstName: "Client",
        lastName: "User",
        password: "password",
        roles: [
            _role.allRoles.client
        ]
    }
];

//# sourceMappingURL=user.constant.js.map