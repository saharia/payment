"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthRoleMicroServiceGuard", {
    enumerable: true,
    get: function() {
        return AuthRoleMicroServiceGuard;
    }
});
const _common = require("@nestjs/common");
const _executioncontexthost = require("@nestjs/core/helpers/execution-context-host");
const _microservices = require("@nestjs/microservices");
const _passport = require("@nestjs/passport");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthRoleMicroServiceGuard = class AuthRoleMicroServiceGuard extends (0, _passport.AuthGuard)('jwtAuthRoleMicroService') {
    /* async canActivate(context: ExecutionContext) {
    const request = context.switchToRpc();
    const user: User = request.getContext()['user'];
    const userRoles = user.roles;
    const action = request.getContext().getSubject();
    console.log("checking roles ==>", action);

    const record = this.natService.bindMicroServiceHeader(request.getContext(), { name: action, roleId: '123' });
    return await lastValueFrom(this.client.send('auth.findActionByRole', record));
  } */ canActivate(context) {
        // console.log(context.switchToRpc().getContext());
        return super.canActivate(new _executioncontexthost.ExecutionContextHost([
            context.switchToRpc().getContext()
        ]));
    }
    handleRequest(err, user) {
        console.log("checking roles -->");
        // console.log("validate role for the user")
        /* console.log("user ==>", user);
    console.log("error ==>", err); */ if (err || !user) {
            // throw err || new AuthenticationError('GqlAuthGuard');
            throw err || new _common.ForbiddenException();
        }
        return user;
    }
};
_ts_decorate([
    (0, _common.Inject)('NAT_SERVICE'),
    _ts_metadata("design:type", typeof _microservices.ClientProxy === "undefined" ? Object : _microservices.ClientProxy)
], AuthRoleMicroServiceGuard.prototype, "client", void 0);
AuthRoleMicroServiceGuard = _ts_decorate([
    (0, _common.Injectable)()
], AuthRoleMicroServiceGuard);

//# sourceMappingURL=auth-role-micro-service.guard.js.map