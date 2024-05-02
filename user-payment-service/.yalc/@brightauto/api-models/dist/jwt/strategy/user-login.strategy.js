"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtUserLoginStrategy = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const rxjs_1 = require("rxjs");
const bcrypt = require("bcrypt");
const microservices_2 = require("@nestjs/microservices");
let JwtUserLoginStrategy = class JwtUserLoginStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'userLogin') {
    constructor() {
        console.log("validate");
        super({ usernameField: 'email' });
    }
    async validate(email, password) {
        const user = await (0, rxjs_1.lastValueFrom)(this.client.send('auth.findUserByEmail', { data: { email } }));
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        else {
            throw new microservices_2.RpcException("User not found");
        }
    }
};
__decorate([
    (0, common_1.Inject)('NAT_SERVICE'),
    __metadata("design:type", microservices_1.ClientProxy)
], JwtUserLoginStrategy.prototype, "client", void 0);
JwtUserLoginStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtUserLoginStrategy);
exports.JwtUserLoginStrategy = JwtUserLoginStrategy;
//# sourceMappingURL=user-login.strategy.js.map