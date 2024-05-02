"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: function() {
        return User;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _brandentity = require("../payment/brand.entity");
const _roleentity = require("./role.entity");
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
let User = class User extends _baseentity.BaseEntityColumn {
    async hashPassword() {
        const passwordSalt = Number(process.env.PASSWORD_SALT);
        const salt = await _bcrypt.genSalt(passwordSalt);
        const password = await _bcrypt.hash(this.password, salt);
        // console.log(salt, password);
        this.password = password;
    }
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], User.prototype, "firstName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], User.prototype, "lastName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _typeorm.Column)({
        nullable: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "profilePicture", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _roleentity.Role
        ], {
        nullable: true
    }),
    (0, _typeorm.ManyToMany)(()=>_roleentity.Role, (role)=>role.users),
    _ts_metadata("design:type", Array)
], User.prototype, "roles", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _brandentity.Brand
        ]),
    (0, _typeorm.OneToMany)(()=>_brandentity.Brand, (brand)=>brand.user),
    _ts_metadata("design:type", Array)
], User.prototype, "brands", void 0);
_ts_decorate([
    (0, _typeorm.BeforeInsert)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], User);

//# sourceMappingURL=user.entity.js.map