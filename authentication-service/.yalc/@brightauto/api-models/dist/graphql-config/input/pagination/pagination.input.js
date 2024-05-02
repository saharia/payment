"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaginationInput", {
    enumerable: true,
    get: function() {
        return PaginationInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaginationInput = class PaginationInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], PaginationInput.prototype, "path", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number, {
        nullable: true
    }),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Number)
], PaginationInput.prototype, "page", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number, {
        nullable: true
    }),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Number)
], PaginationInput.prototype, "limit", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            [
                String,
                String
            ]
        ], {
        nullable: true
    }),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Array)
], PaginationInput.prototype, "sortBy", void 0);
PaginationInput = _ts_decorate([
    (0, _graphql.InputType)()
], PaginationInput);

//# sourceMappingURL=pagination.input.js.map