"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CryptoAuthMicroServiceGuard", {
    enumerable: true,
    get: function() {
        return CryptoAuthMicroServiceGuard;
    }
});
const _common = require("@nestjs/common");
const _executioncontexthost = require("@nestjs/core/helpers/execution-context-host");
const _passport = require("@nestjs/passport");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CryptoAuthMicroServiceGuard = class CryptoAuthMicroServiceGuard extends (0, _passport.AuthGuard)([
    'cryptoAuthMicroService'
]) {
    canActivate(context) {
        // console.log(context.switchToRpc().getContext());
        return super.canActivate(new _executioncontexthost.ExecutionContextHost([
            context.switchToRpc().getContext()
        ]));
    }
    handleRequest(err, user) {
        /* console.log("user ==>", user);
    console.log("error ==>", err); */ if (err || !user) {
            // throw err || new AuthenticationError('GqlAuthGuard');
            throw err || new _common.UnauthorizedException();
        }
        return user;
    }
};
CryptoAuthMicroServiceGuard = _ts_decorate([
    (0, _common.Injectable)()
], CryptoAuthMicroServiceGuard);

//# sourceMappingURL=crypto-auth-micro-service.guard.js.map