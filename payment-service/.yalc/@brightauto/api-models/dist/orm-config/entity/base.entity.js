"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseEntityColumn", {
    enumerable: true,
    get: function() {
        return BaseEntityColumn;
    }
});
const _graphql = require("@nestjs/graphql");
const _typeorm = require("typeorm");
const _uuid = require("uuid");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let BaseEntityColumn = class BaseEntityColumn {
    constructor(){
        this.id = (0, _uuid.v4)();
        this.createdAt = new Date();
    }
};
_ts_decorate([
    (0, _graphql.Field)(()=>_graphql.ID),
    (0, _typeorm.PrimaryColumn)(),
    _ts_metadata("design:type", String)
], BaseEntityColumn.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean),
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], BaseEntityColumn.prototype, "isPublished", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean),
    (0, _typeorm.Column)({
        default: true
    }),
    _ts_metadata("design:type", Boolean)
], BaseEntityColumn.prototype, "isActive", void 0);
_ts_decorate([
    (0, _graphql.Field)(),
    (0, _typeorm.CreateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntityColumn.prototype, "createdAt", void 0);
_ts_decorate([
    (0, _graphql.Field)({
        nullable: true
    }),
    (0, _typeorm.UpdateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntityColumn.prototype, "updatedAt", void 0);
_ts_decorate([
    (0, _graphql.Field)({
        nullable: true
    }),
    (0, _typeorm.DeleteDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntityColumn.prototype, "deletedAt", void 0);
BaseEntityColumn = _ts_decorate([
    (0, _graphql.ObjectType)()
], BaseEntityColumn);

//# sourceMappingURL=base.entity.js.map