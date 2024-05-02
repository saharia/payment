"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseUserEntityColumn", {
    enumerable: true,
    get: function() {
        return BaseUserEntityColumn;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _uuid = require("uuid");
const _userentity = require("./authentication/user.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let BaseUserEntityColumn = class BaseUserEntityColumn {
    constructor(){
        this.id = (0, _uuid.v4)();
        this.createdAt = new Date();
    }
};
_ts_decorate([
    (0, _graphql.Field)(()=>_graphql.ID),
    (0, _typeorm.PrimaryColumn)(),
    _ts_metadata("design:type", String)
], BaseUserEntityColumn.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean),
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], BaseUserEntityColumn.prototype, "isPublished", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean),
    (0, _typeorm.Column)({
        default: true
    }),
    _ts_metadata("design:type", Boolean)
], BaseUserEntityColumn.prototype, "isActive", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_userentity.User),
    (0, _typeorm.ManyToOne)(()=>_userentity.User),
    _ts_metadata("design:type", typeof _userentity.User === "undefined" ? Object : _userentity.User)
], BaseUserEntityColumn.prototype, "createdBy", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_userentity.User, {
        nullable: true
    }),
    (0, _typeorm.ManyToOne)(()=>_userentity.User, {
        nullable: true
    }),
    _ts_metadata("design:type", typeof _userentity.User === "undefined" ? Object : _userentity.User)
], BaseUserEntityColumn.prototype, "updatedBy", void 0);
_ts_decorate([
    (0, _graphql.Field)(),
    (0, _typeorm.CreateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseUserEntityColumn.prototype, "createdAt", void 0);
_ts_decorate([
    (0, _graphql.Field)({
        nullable: true
    }),
    (0, _typeorm.UpdateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseUserEntityColumn.prototype, "updatedAt", void 0);
_ts_decorate([
    (0, _graphql.Field)({
        nullable: true
    }),
    (0, _typeorm.DeleteDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseUserEntityColumn.prototype, "deletedAt", void 0);
BaseUserEntityColumn = _ts_decorate([
    (0, _graphql.ObjectType)()
], BaseUserEntityColumn);

//# sourceMappingURL=base-user.entity.js.map