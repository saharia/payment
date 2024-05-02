"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtAuthMicroServiceStrategy", {
    enumerable: true,
    get: function() {
        return JwtAuthMicroServiceStrategy;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _microservices = require("@nestjs/microservices");
const _passport = require("@nestjs/passport");
const _passportjwt = require("passport-jwt");
const _rxjs = require("rxjs");
const _natservice = require("../../nat-service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtAuthMicroServiceStrategy = class JwtAuthMicroServiceStrategy extends (0, _passport.PassportStrategy)(_passportjwt.Strategy, 'jwtAuthMicroService') {
    async validate(context, payload) {
        // console.log("JWT payload", context.getSubject(), payload);
        const id = payload.sub;
        const action = context.getSubject();
        console.log("action ---->", action);
        const record = this.natService.bindMicroServiceHeader(context, {
            id,
            roleId: payload.roleId
        });
        const user = await (0, _rxjs.lastValueFrom)(this.client.send('auth.findUser', record));
        if (!user) {
            throw new _common.UnauthorizedException();
        }
        return user;
    }
    constructor(natService, configService){
        super({
            passReqToCallback: true,
            jwtFromRequest: _passportjwt.ExtractJwt.fromExtractors([
                (req)=>{
                    // console.log("User service strategy Req ==>", req.getHeaders())
                    return req.getHeaders() && req.getHeaders().headers.get('authorization') ? req.getHeaders().headers.get('authorization')[0].replace('Bearer ', '') : null;
                }
            ]),
            ignoreExpiration: true,
            secretOrKey: configService.get('JWT_SECRET')
        });
        this.natService = natService;
        this.configService = configService;
    }
};
_ts_decorate([
    (0, _common.Inject)('NAT_SERVICE'),
    _ts_metadata("design:type", typeof _microservices.ClientProxy === "undefined" ? Object : _microservices.ClientProxy)
], JwtAuthMicroServiceStrategy.prototype, "client", void 0);
JwtAuthMicroServiceStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _natservice.NatService === "undefined" ? Object : _natservice.NatService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], JwtAuthMicroServiceStrategy);

//# sourceMappingURL=auth-micro-service.strategy.js.map