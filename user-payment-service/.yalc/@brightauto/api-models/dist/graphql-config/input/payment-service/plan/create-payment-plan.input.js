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
exports.CreatePaymentPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const payment_plan_entity_1 = require("../../../../orm-config/entity/payment/payment-plan.entity");
const column_exists_decorator_1 = require("../../../../validation/custom/column-exists/column-exists.decorator");
let CreatePaymentPlanInput = class CreatePaymentPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, column_exists_decorator_1.ColumnExists)(payment_plan_entity_1.PaymentPlan),
    __metadata("design:type", String)
], CreatePaymentPlanInput.prototype, "name", void 0);
CreatePaymentPlanInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePaymentPlanInput);
exports.CreatePaymentPlanInput = CreatePaymentPlanInput;
//# sourceMappingURL=create-payment-plan.input.js.map