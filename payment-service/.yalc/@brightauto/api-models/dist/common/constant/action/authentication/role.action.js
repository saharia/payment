"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "roleActions", {
    enumerable: true,
    get: function() {
        return roleActions;
    }
});
const _role = require("../../role");
const roleActions = [
    {
        id: "f2f15c06-ceb6-4ec5-a224-d448d2966a22",
        name: "role.create",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "bd53abe2-d0ca-4241-b528-a9ce3bc5c59a",
        name: "role.update",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "b0491bed-bc18-4415-bfe7-447541a54dc5",
        name: "role.remove",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "08d3d913-4492-44bc-8aae-5fea634e5b74",
        name: "role.findOne",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    },
    {
        id: "ea730c5e-f7cb-4476-8bf4-8665b3e177b5",
        name: "role.findAll",
        roles: [
            _role.allRoles.admin,
            _role.allRoles.superadmin
        ]
    }
];

//# sourceMappingURL=role.action.js.map