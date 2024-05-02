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
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const action_entity_1 = require("./action.entity");
const user_entity_1 = require("./user.entity");
let Role = class Role extends base_entity_1.BaseEntityColumn {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User], { nullable: true }),
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.roles),
    (0, typeorm_1.JoinTable)({
        name: 'user_role'
    }),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, graphql_1.Field)(() => [action_entity_1.Action], { nullable: true }),
    (0, typeorm_1.ManyToMany)(() => action_entity_1.Action, (action) => action.roles),
    (0, typeorm_1.JoinTable)({
        name: 'role_action'
    }),
    __metadata("design:type", Array)
], Role.prototype, "actions", void 0);
Role = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Role);
exports.Role = Role;
//# sourceMappingURL=role.entity.js.map