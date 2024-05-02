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
exports.UpdatePaymentGatewayInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mapped_types_1 = require("@nestjs/mapped-types");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const relation_exists_decorator_1 = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
const payment_gateway_entity_1 = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const column_exists_decorator_1 = require("../../../../validation/custom/column-exists/column-exists.decorator");
const payment_gateway_plan_input_1 = require("../gateway-plan/payment-gateway-plan.input");
const create_payment_gateway_input_1 = require("./create-payment-gateway.input");
const validation_1 = require("../../../../validation");
let UpdatePaymentGatewayInput = class UpdatePaymentGatewayInput extends (0, mapped_types_1.PartialType)(create_payment_gateway_input_1.CreatePaymentGatewayInput) {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsUUID)(4),
    (0, relation_exists_decorator_1.RelationExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdatePaymentGatewayInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdatePaymentGatewayInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdatePaymentGatewayInput.prototype, "apiSandboxTokenUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdatePaymentGatewayInput.prototype, "apiSandboxPaymentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdatePaymentGatewayInput.prototype, "apiTokenUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdatePaymentGatewayInput.prototype, "apiPaymentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_plan_input_1.PaymentGatewayPlanInput], { nullable: true }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, validation_1.IsUniqeArrayObjets)('paymentPlan.id'),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => payment_gateway_plan_input_1.PaymentGatewayPlanInput),
    __metadata("design:type", Array)
], UpdatePaymentGatewayInput.prototype, "paymentGatewayPlans", void 0);
UpdatePaymentGatewayInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePaymentGatewayInput);
exports.UpdatePaymentGatewayInput = UpdatePaymentGatewayInput;
//# sourceMappingURL=update-payment-gateway.input.js.map