"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandActions = void 0;
const role_1 = require("../../role");
exports.brandActions = [
    {
        id: "a569aa48-44e5-442c-a053-8a69ec8312fa",
        name: "brand.create",
        roles: [
            role_1.allRoles.client,
        ]
    },
    {
        id: "2b704d4a-3b98-4166-b52d-6ffdefe4a2c9",
        name: "brand.update",
        roles: [
            role_1.allRoles.client,
        ]
    },
    {
        id: "5286a09c-fde6-47fb-b2d9-1ccb53258be4",
        name: "brand.remove",
        roles: [
            role_1.allRoles.client,
        ]
    },
    {
        id: "2dcdb9ba-efd8-4ac0-b164-28ddcbfb77e7",
        name: "brand.findOne",
        roles: [
            role_1.allRoles.client,
        ]
    },
    {
        id: "a1410fae-65ee-456e-a97a-1b7149268c89",
        name: "brand.findAll",
        roles: [
            role_1.allRoles.admin,
            role_1.allRoles.client
        ]
    }
];
//# sourceMappingURL=brand.action.js.map