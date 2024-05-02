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
exports.UpdateBrandInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const brand_type_1 = require("../../../../orm-config/entity/enum/brand-type");
const payment_mode_1 = require("../../../../orm-config/entity/enum/payment-mode");
const update_payment_gateway_key_input_1 = require("./update-payment-gateway-key-input");
const validation_1 = require("../../../../validation");
const brand_entity_1 = require("../../../../orm-config/entity/payment/brand.entity");
let UpdateBrandInput = class UpdateBrandInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], UpdateBrandInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => brand_type_1.BrandType, { nullable: true }),
    (0, class_validator_1.IsEnum)(brand_type_1.BrandType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBrandInput.prototype, "brandType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, validation_1.ColumnExists)(brand_entity_1.Brand),
    __metadata("design:type", String)
], UpdateBrandInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_mode_1.PaymentMode, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(payment_mode_1.PaymentMode),
    __metadata("design:type", String)
], UpdateBrandInput.prototype, "paymentMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => [update_payment_gateway_key_input_1.UpdatePaymentGatewayKeyInput], { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => update_payment_gateway_key_input_1.UpdatePaymentGatewayKeyInput),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateBrandInput.prototype, "paymentGatewayKeys", void 0);
UpdateBrandInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateBrandInput);
exports.UpdateBrandInput = UpdateBrandInput;
//# sourceMappingURL=update-brand.input.js.map