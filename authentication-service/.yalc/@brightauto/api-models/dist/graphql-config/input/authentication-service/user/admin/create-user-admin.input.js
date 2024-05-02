"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUserAdminInput", {
    enumerable: true,
    get: function() {
        return CreateUserAdminInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
const _userentity = require("../../../../../orm-config/entity/authentication/user.entity");
const _columnexistsdecorator = require("../../../../../validation/custom/column-exists/column-exists.decorator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateUserAdminInput = class CreateUserAdminInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsEmail)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _columnexistsdecorator.ColumnExists)(_userentity.User),
    _ts_metadata("design:type", String)
], CreateUserAdminInput.prototype, "email", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.MinLength)(5),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateUserAdminInput.prototype, "password", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateUserAdminInput.prototype, "firstName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateUserAdminInput.prototype, "lastName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean, {
        defaultValue: false
    }),
    (0, _classvalidator.IsBoolean)(),
    _ts_metadata("design:type", Boolean)
], CreateUserAdminInput.prototype, "isActive", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateUserAdminInput.prototype, "profilePicture", void 0);
CreateUserAdminInput = _ts_decorate([
    (0, _graphql.InputType)()
], CreateUserAdminInput);

//# sourceMappingURL=create-user-admin.input.js.map