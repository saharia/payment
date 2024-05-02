"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RegisterUserClientInput", {
    enumerable: true,
    get: function() {
        return RegisterUserClientInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
const _userentity = require("../../../../../orm-config/entity/authentication/user.entity");
const _columnexistsdecorator = require("../../../../../validation/custom/column-exists/column-exists.decorator");
const _matchvalidate = require("../../../../../validation/custom/match/match.validate");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RegisterUserClientInput = class RegisterUserClientInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsEmail)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _columnexistsdecorator.ColumnExists)(_userentity.User),
    _ts_metadata("design:type", String)
], RegisterUserClientInput.prototype, "email", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], RegisterUserClientInput.prototype, "firstName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], RegisterUserClientInput.prototype, "lastName", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.MinLength)(5),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], RegisterUserClientInput.prototype, "password", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MinLength)(5),
    (0, _matchvalidate.Match)('password'),
    _ts_metadata("design:type", String)
], RegisterUserClientInput.prototype, "passwordConfirm", void 0);
RegisterUserClientInput = _ts_decorate([
    (0, _graphql.InputType)()
], RegisterUserClientInput);

//# sourceMappingURL=register-user-client.input.js.map