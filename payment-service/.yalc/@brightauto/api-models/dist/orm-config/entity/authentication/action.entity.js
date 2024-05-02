"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Action", {
    enumerable: true,
    get: function() {
        return Action;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _baseentity = require("../base.entity");
const _roleentity = require("./role.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let Action = class Action extends _baseentity.BaseEntityColumn {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], Action.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _roleentity.Role
        ], {
        nullable: true
    }),
    (0, _typeorm.ManyToMany)(()=>_roleentity.Role, (role)=>role.actions),
    _ts_metadata("design:type", Array)
], Action.prototype, "roles", void 0);
Action = _ts_decorate([
    (0, _graphql.ObjectType)(),
    (0, _typeorm.Entity)()
], Action);

//# sourceMappingURL=action.entity.js.map