"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateActionInput", {
    enumerable: true,
    get: function() {
        return UpdateActionInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _mappedtypes = require("@nestjs/mapped-types");
const _classvalidator = require("class-validator");
const _createactioninput = require("./create-action.input");
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
let UpdateActionInput = class UpdateActionInput extends (0, _mappedtypes.PartialType)(_createactioninput.CreateActionInput) {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsUUID)(4),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _validation.RelationExists)(_ormconfig.Action),
    _ts_metadata("design:type", String)
], UpdateActionInput.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsOptional)(),
    (0, _validation.ColumnExists)(_ormconfig.Action),
    _ts_metadata("design:type", String)
], UpdateActionInput.prototype, "name", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            String
        ], {
        nullable: true
    }),
    (0, _classvalidator.IsUUID)(4, {
        each: true
    }),
    (0, _validation.RelationExists)(_ormconfig.Role),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Array)
], UpdateActionInput.prototype, "roleIds", void 0);
UpdateActionInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdateActionInput);

//# sourceMappingURL=update-action.input.js.map