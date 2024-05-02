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
    JWTAuthService: function() {
        return _authservice.JWTAuthService;
    },
    JWTServiceModule: function() {
        return _jwtmodule.JWTServiceModule;
    },
    JwtAuthMicroServiceStrategy: function() {
        return _authmicroservicestrategy.JwtAuthMicroServiceStrategy;
    },
    JwtUserLoginStrategy: function() {
        return _userloginstrategy.JwtUserLoginStrategy;
    },
    jwtFactory: function() {
        return _jwtfactory.jwtFactory;
    }
});
const _authservice = require("./auth.service");
const _jwtfactory = require("./jwt.factory");
const _jwtmodule = require("./jwt.module");
const _authmicroservicestrategy = require("./strategy/auth-micro-service.strategy");
const _userloginstrategy = require("./strategy/user-login.strategy");

//# sourceMappingURL=index.js.map