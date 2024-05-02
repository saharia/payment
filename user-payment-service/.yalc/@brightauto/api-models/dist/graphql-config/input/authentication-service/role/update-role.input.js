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
exports.UpdateRoleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const create_role_input_1 = require("./create-role.input");
const orm_config_1 = require("../../../../orm-config");
const validation_1 = require("../../../../validation");
let UpdateRoleInput = class UpdateRoleInput extends (0, mapped_types_1.PartialType)(create_role_input_1.CreateRoleInput) {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsUUID)(4),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRoleInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, validation_1.ColumnExists)(orm_config_1.Role),
    __metadata("design:type", String)
], UpdateRoleInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsUUID)(4, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateRoleInput.prototype, "actions", void 0);
UpdateRoleInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateRoleInput);
exports.UpdateRoleInput = UpdateRoleInput;
//# sourceMappingURL=update-role.input.js.map