"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateRoleInput", {
    enumerable: true,
    get: function() {
        return UpdateRoleInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _mappedtypes = require("@nestjs/mapped-types");
const _classvalidator = require("class-validator");
const _createroleinput = require("./create-role.input");
const _ormconfig = require("../../../../orm-config");
const _validation = require("../../../../validation");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateRoleInput = class UpdateRoleInput extends (0, _mappedtypes.PartialType)(_createroleinput.CreateRoleInput) {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsUUID)(4),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], UpdateRoleInput.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _validation.ColumnExists)(_ormconfig.Role),
    _ts_metadata("design:type", String)
], UpdateRoleInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            String
        ], {
        nullable: true
    }),
    (0, _classvalidator.IsUUID)(4, {
        each: true
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Array)
], UpdateRoleInput.prototype, "actions", void 0);
UpdateRoleInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdateRoleInput);

//# sourceMappingURL=update-role.input.js.map