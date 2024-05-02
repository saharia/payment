"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtUserLoginStrategy", {
    enumerable: true,
    get: function() {
        return JwtUserLoginStrategy;
    }
});
const _common = require("@nestjs/common");
const _microservices = require("@nestjs/microservices");
const _passport = require("@nestjs/passport");
const _passportlocal = require("passport-local");
const _rxjs = require("rxjs");
const _bcrypt = /*#__PURE__*/ _interop_require_wildcard(require("bcrypt"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtUserLoginStrategy = class JwtUserLoginStrategy extends (0, _passport.PassportStrategy)(_passportlocal.Strategy, 'userLogin') {
    async validate(email, password) {
        // console.log("Login user strategy", email, password)
        // const user = await this.authService.validateUser(email, password);
        // const record = this.natService.bindMicroServiceHeader(context, { id });
        const user = await (0, _rxjs.lastValueFrom)(this.client.send('auth.findUserByEmail', {
            data: {
                email
            }
        }));
        if (user) {
            const isMatch = await _bcrypt.compare(password, user.password);
            if (isMatch) {
                const { password, ...result } = user;
                return result;
            } else {
                throw new _common.UnauthorizedException();
            }
        } else {
            throw new _microservices.RpcException("User not found");
        }
    }
    constructor(){
        console.log("validate");
        super({
            usernameField: 'email'
        });
    }
};
_ts_decorate([
    (0, _common.Inject)('NAT_SERVICE'),
    _ts_metadata("design:type", typeof _microservices.ClientProxy === "undefined" ? Object : _microservices.ClientProxy)
], JwtUserLoginStrategy.prototype, "client", void 0);
JwtUserLoginStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], JwtUserLoginStrategy);

//# sourceMappingURL=user-login.strategy.js.map