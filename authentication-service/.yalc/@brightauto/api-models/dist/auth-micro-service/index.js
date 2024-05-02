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
    AuthGuardMicroServiceModule: function() {
        return _authguardmicroservicemodule.AuthGuardMicroServiceModule;
    },
    AuthMicroServiceModule: function() {
        return _authmicroservicemodule.AuthMicroServiceModule;
    }
});
const _authguardmicroservicemodule = require("./auth-guard-micro-service.module");
const _authmicroservicemodule = require("./auth-micro-service.module");
_export_star(require("./decorators"), exports);
_export_star(require("./guards"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=index.js.map