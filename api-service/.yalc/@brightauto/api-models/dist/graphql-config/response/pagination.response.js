"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Paginated", {
    enumerable: true,
    get: function() {
        return Paginated;
    }
});
const _graphql = require("@nestjs/graphql");
const _paginatemeta = require("./paginate.meta");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function Paginated(classRef) {
    let PaginatedType = class PaginatedType {
    };
    _ts_decorate([
        (0, _graphql.Field)((type)=>[
                classRef
            ], {
            nullable: true
        }),
        _ts_metadata("design:type", Array)
    ], PaginatedType.prototype, "data", void 0);
    _ts_decorate([
        (0, _graphql.Field)(()=>_paginatemeta.PaginateMeta),
        _ts_metadata("design:type", typeof _paginatemeta.PaginateMeta === "undefined" ? Object : _paginatemeta.PaginateMeta)
    ], PaginatedType.prototype, "meta", void 0);
    PaginatedType = _ts_decorate([
        (0, _graphql.ObjectType)({
            isAbstract: true
        })
    ], PaginatedType);
    return PaginatedType;
}

//# sourceMappingURL=pagination.response.js.map