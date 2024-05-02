"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateUserClientInput", {
    enumerable: true,
    get: function() {
        return UpdateUserClientInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _mappedtypes = require("@nestjs/mapped-types");
const _classvalidator = require("class-validator");
const _userentity = require("../../../../../orm-config/entity/authentication/user.entity");
const _columnexistsdecorator = require("../../../../../validation/custom/column-exists/column-exists.decorator");
const _createuserclientinput = require("./create-user-client.input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateUserClientInput = class UpdateUserClientInput extends (0, _mappedtypes.PartialType)(_createuserclientinput.CreateUserClientInput) {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsUUID)(4),
    _ts_metadata("design:type", String)
], UpdateUserClientInput.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsEmail)(),
    (0, _columnexistsdecorator.ColumnExists)(_userentity.User),
    _ts_metadata("design:type", String)
], UpdateUserClientInput.prototype, "email", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], UpdateUserClientInput.prototype, "firstName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], UpdateUserClientInput.prototype, "lastName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean, {
        nullable: true
    }),
    (0, _classvalidator.IsBoolean)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Boolean)
], UpdateUserClientInput.prototype, "isActive", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], UpdateUserClientInput.prototype, "profilePicture", void 0);
UpdateUserClientInput = _ts_decorate([
    (0, _graphql.InputType)()
], UpdateUserClientInput);

//# sourceMappingURL=update-user-client.input.js.map