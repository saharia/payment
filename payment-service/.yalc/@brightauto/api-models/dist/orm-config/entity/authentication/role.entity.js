"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Role", {
    enumerable: true,
    get: function() {
        return Role;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _actionentity = require("./action.entity");
const _userentity = require("./user.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let Role = class Role extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], Role.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _userentity.User
        ], {
        nullable: true
    }),
    (0, _typeorm.ManyToMany)(()=>_userentity.User, (user)=>user.roles),
    (0, _typeorm.JoinTable)({
        name: 'user_role'
    }),
    _ts_metadata("design:type", Array)
], Role.prototype, "users", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _actionentity.Action
        ], {
        nullable: true
    }),
    (0, _typeorm.ManyToMany)(()=>_actionentity.Action, (action)=>action.roles),
    (0, _typeorm.JoinTable)({
        name: 'role_action'
    }),
    _ts_metadata("design:type", Array)
], Role.prototype, "actions", void 0);
Role = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], Role);

//# sourceMappingURL=role.entity.js.map