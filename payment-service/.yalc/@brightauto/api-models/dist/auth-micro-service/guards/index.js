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
    AuthMicroServiceGuard: function() {
        return _authmicroserviceguard.AuthMicroServiceGuard;
    },
    AuthRoleMicroServiceGuard: function() {
        return _authrolemicroserviceguard.AuthRoleMicroServiceGuard;
    }
});
const _authmicroserviceguard = require("./auth-micro-service.guard");
const _authrolemicroserviceguard = require("./auth-role-micro-service.guard");

//# sourceMappingURL=index.js.map