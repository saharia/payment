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
    AuthUser: function() {
        return _authuserdecorator.AuthUser;
    },
    LoggedInUser: function() {
        return _loggedinuserdecorator.LoggedInUser;
    }
});
const _authuserdecorator = require("./auth-user.decorator");
const _loggedinuserdecorator = require("./loggedin-user.decorator");

//# sourceMappingURL=index.js.map