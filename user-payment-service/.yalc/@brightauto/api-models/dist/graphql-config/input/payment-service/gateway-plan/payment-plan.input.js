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
exports.PaymentPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const orm_config_1 = require("../../../../orm-config");
const validation_1 = require("../../../../validation");
let PaymentPlanInput = class PaymentPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, validation_1.RelationExists)(orm_config_1.PaymentPlan),
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], PaymentPlanInput.prototype, "id", void 0);
PaymentPlanInput = __decorate([
    (0, graphql_1.InputType)()
], PaymentPlanInput);
exports.PaymentPlanInput = PaymentPlanInput;
//# sourceMappingURL=payment-plan.input.js.map