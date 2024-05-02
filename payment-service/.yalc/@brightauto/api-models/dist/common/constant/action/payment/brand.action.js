"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "brandActions", {
    enumerable: true,
    get: function() {
        return brandActions;
    }
});
const _role = require("../../role");
const brandActions = [
    {
        id: "a569aa48-44e5-442c-a053-8a69ec8312fa",
        name: "brand.create",
        roles: [
            _role.allRoles.client
        ]
    },
    {
        id: "2b704d4a-3b98-4166-b52d-6ffdefe4a2c9",
        name: "brand.update",
        roles: [
            _role.allRoles.client
        ]
    },
    {
        id: "5286a09c-fde6-47fb-b2d9-1ccb53258be4",
        name: "brand.remove",
        roles: [
            _role.allRoles.client
        ]
    },
    {
        id: "2dcdb9ba-efd8-4ac0-b164-28ddcbfb77e7",
        name: "brand.findOne",
        roles: [
            _role.allRoles.client
        ]
    },
    {
        id: "a1410fae-65ee-456e-a97a-1b7149268c89",
        name: "brand.findAll",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.client
        ]
    }
];

//# sourceMappingURL=brand.action.js.map