"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginAdminUsingEmailInput", {
    enumerable: true,
    get: function() {
        return LoginAdminUsingEmailInput;
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
let LoginAdminUsingEmailInput = class LoginAdminUsingEmailInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsEmail)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], LoginAdminUsingEmailInput.prototype, "email", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], LoginAdminUsingEmailInput.prototype, "password", void 0);
LoginAdminUsingEmailInput = _ts_decorate([
    (0, _graphql.InputType)()
], LoginAdminUsingEmailInput);

//# sourceMappingURL=login-admin-email.input.js.map