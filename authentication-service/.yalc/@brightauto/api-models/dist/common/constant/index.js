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
    JSONObject: function() {
        return _jsonobject.JSONObject;
    },
    jwtConstants: function() {
        return _jwt.jwtConstants;
    },
    natMicroServiceConfiguration: function() {
        return _natmicroserviceconfiguration.natMicroServiceConfiguration;
    },
    roles: function() {
        return _roleconstant.roles;
    },
    saltRounds: function() {
        return _passwordsalt.saltRounds;
    }
});
const _jsonobject = require("./json.object");
const _jwt = require("./jwt");
const _natmicroserviceconfiguration = require("./nat-microservice-configuration");
const _passwordsalt = require("./password.salt");
const _roleconstant = require("./role.constant");
_export_star(require("./role"), exports);
_export_star(require("./database"), exports);
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