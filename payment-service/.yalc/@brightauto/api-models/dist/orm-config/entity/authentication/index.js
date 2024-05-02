"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Action: function() {
        return _actionentity.Action;
    },
    Role: function() {
        return _roleentity.Role;
    },
    User: function() {
        return _userentity.User;
    }
});
const _actionentity = require("./action.entity");
const _roleentity = require("./role.entity");
const _userentity = require("./user.entity");

//# sourceMappingURL=index.js.map