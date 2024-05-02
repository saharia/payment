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
exports.CreatePaymentGatewayKeyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_brand_payment_gateway_input_1 = require("./create-brand-payment-gateway-input");
const create_brand_payment_gateway_plan_input_1 = require("./create-brand-payment-gateway-plan-input");
let CreatePaymentGatewayKeyInput = class CreatePaymentGatewayKeyInput {
};
__decorate([
    (0, graphql_1.Field)(() => create_brand_payment_gateway_input_1.CreateBrandPaymentGatewayInput),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_brand_payment_gateway_input_1.CreateBrandPaymentGatewayInput),
    __metadata("design:type", create_brand_payment_gateway_input_1.CreateBrandPaymentGatewayInput)
], CreatePaymentGatewayKeyInput.prototype, "paymentGateway", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentGatewayKeyInput.prototype, "clientId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentGatewayKeyInput.prototype, "clientSecret", void 0);
__decorate([
    (0, graphql_1.Field)(() => [create_brand_payment_gateway_plan_input_1.CreateBrandPaymentGatewayPlanInput]),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => create_brand_payment_gateway_plan_input_1.CreateBrandPaymentGatewayPlanInput),
    __metadata("design:type", Array)
], CreatePaymentGatewayKeyInput.prototype, "paymentGatewayPlans", void 0);
CreatePaymentGatewayKeyInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePaymentGatewayKeyInput);
exports.CreatePaymentGatewayKeyInput = CreatePaymentGatewayKeyInput;
//# sourceMappingURL=create-payment-gateway-key-input.js.map