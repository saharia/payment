"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAdminInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../../../validation");
const user_entity_1 = require("../../../../../orm-config/entity/authentication/user.entity");
const column_exists_decorator_1 = require("../../../../../validation/custom/column-exists/column-exists.decorator");
const create_user_admin_input_1 = require("./create-user-admin.input");
let UpdateUserAdminInput = class UpdateUserAdminInput extends (0, mapped_types_1.PartialType)(create_user_admin_input_1.CreateUserAdminInput) {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsUUID)(4),
    (0, validation_1.RelationExists)(user_entity_1.User),
    __metadata("design:type", String)
], UpdateUserAdminInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, column_exists_decorator_1.ColumnExists)(user_entity_1.User),
    __metadata("design:type", String)
], UpdateUserAdminInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUserAdminInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUserAdminInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateUserAdminInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUserAdminInput.prototype, "profilePicture", void 0);
UpdateUserAdminInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserAdminInput);
exports.UpdateUserAdminInput = UpdateUserAdminInput;
//# sourceMappingURL=update-user-admin.input.js.map