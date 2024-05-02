"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtAuthRoleMicroServiceStrategy", {
    enumerable: true,
    get: function() {
        return JwtAuthRoleMicroServiceStrategy;
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
let JwtAuthRoleMicroServiceStrategy = class JwtAuthRoleMicroServiceStrategy extends (0, _passport.PassportStrategy)(_passportjwt.Strategy, 'jwtAuthRoleMicroService') {
    async validate(context, payload) {
        try {
            const action = context.getSubject();
            // console.log("check role guard inside strategy", action, context.getSubject(), payload)
            console.log('checking roles -->', context, payload);
            const record = this.natService.bindMicroServiceHeader(context, {
                action,
                roleId: payload.roleId
            });
            const roleAction = await (0, _rxjs.lastValueFrom)(this.client.send('auth.findActionByRole', record));
            if (roleAction) {
                return context.user;
            }
            return false;
        } catch (error) {
            throw error;
        }
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
], JwtAuthRoleMicroServiceStrategy.prototype, "client", void 0);
JwtAuthRoleMicroServiceStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _natservice.NatService === "undefined" ? Object : _natservice.NatService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], JwtAuthRoleMicroServiceStrategy);

//# sourceMappingURL=auth-role-micro-service.strategy.js.map