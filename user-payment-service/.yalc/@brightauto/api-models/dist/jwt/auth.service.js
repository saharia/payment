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
exports.JWTAuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entity_1 = require("../orm-config/entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let JWTAuthService = class JWTAuthService {
    async validateUser(email, pass) {
        const user = await this.user.findOne({ where: { email }, relations: ['roles'] });
        if (user) {
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                return null;
            }
        }
        return null;
    }
    async findOne(findUserInput) {
        try {
            const query = {
                where: {
                    id: findUserInput.id,
                },
                relations: ["roles", "roles.actions"]
            };
            return await this.user.findOneOrFail(query);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], JWTAuthService.prototype, "user", void 0);
JWTAuthService = __decorate([
    (0, common_1.Injectable)()
], JWTAuthService);
exports.JWTAuthService = JWTAuthService;
//# sourceMappingURL=auth.service.js.map