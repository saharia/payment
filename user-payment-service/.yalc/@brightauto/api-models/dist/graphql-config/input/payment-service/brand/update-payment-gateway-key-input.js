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
exports.UpdatePaymentGatewayKeyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const update_brand_payment_gateway_input_1 = require("./update-brand-payment-gateway-input");
const update_brand_payment_gateway_plan_input_1 = require("./update-brand-payment-gateway-plan-input");
let UpdatePaymentGatewayKeyInput = class UpdatePaymentGatewayKeyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], UpdatePaymentGatewayKeyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => update_brand_payment_gateway_input_1.UpdateBrandPaymentGatewayInput, { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => update_brand_payment_gateway_input_1.UpdateBrandPaymentGatewayInput),
    __metadata("design:type", update_brand_payment_gateway_input_1.UpdateBrandPaymentGatewayInput)
], UpdatePaymentGatewayKeyInput.prototype, "paymentGateway", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePaymentGatewayKeyInput.prototype, "clientId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePaymentGatewayKeyInput.prototype, "clientSecret", void 0);
__decorate([
    (0, graphql_1.Field)(() => [update_brand_payment_gateway_plan_input_1.UpdateBrandPaymentGatewayPlanInput], { nullable: true }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => update_brand_payment_gateway_plan_input_1.UpdateBrandPaymentGatewayPlanInput),
    __metadata("design:type", Array)
], UpdatePaymentGatewayKeyInput.prototype, "paymentGatewayPlans", void 0);
UpdatePaymentGatewayKeyInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePaymentGatewayKeyInput);
exports.UpdatePaymentGatewayKeyInput = UpdatePaymentGatewayKeyInput;
//# sourceMappingURL=update-payment-gateway-key-input.js.map