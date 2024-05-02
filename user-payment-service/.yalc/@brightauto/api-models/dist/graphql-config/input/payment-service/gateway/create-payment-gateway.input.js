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
exports.CreatePaymentGatewayInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_gateway_entity_1 = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const column_exists_decorator_1 = require("../../../../validation/custom/column-exists/column-exists.decorator");
const payment_gateway_plan_input_1 = require("../gateway-plan/payment-gateway-plan.input");
const validation_1 = require("../../../../validation");
let CreatePaymentGatewayInput = class CreatePaymentGatewayInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiSandboxTokenUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiSandboxPaymentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiTokenUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, column_exists_decorator_1.ColumnExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], CreatePaymentGatewayInput.prototype, "apiPaymentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_plan_input_1.PaymentGatewayPlanInput]),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, validation_1.IsUniqeArrayObjets)('paymentPlan.id'),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => payment_gateway_plan_input_1.PaymentGatewayPlanInput),
    __metadata("design:type", Array)
], CreatePaymentGatewayInput.prototype, "paymentGatewayPlans", void 0);
CreatePaymentGatewayInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePaymentGatewayInput);
exports.CreatePaymentGatewayInput = CreatePaymentGatewayInput;
//# sourceMappingURL=create-payment-gateway.input.js.map