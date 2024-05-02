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
exports.CreateBrandInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const brand_entity_1 = require("../../../../orm-config/entity/payment/brand.entity");
const validation_1 = require("../../../../validation");
const brand_type_1 = require("../../../../orm-config/entity/enum/brand-type");
const payment_mode_1 = require("../../../../orm-config/entity/enum/payment-mode");
const create_payment_gateway_key_input_1 = require("./create-payment-gateway-key-input");
let CreateBrandInput = class CreateBrandInput {
};
__decorate([
    (0, graphql_1.Field)(() => brand_type_1.BrandType),
    (0, class_validator_1.IsEnum)(brand_type_1.BrandType),
    __metadata("design:type", String)
], CreateBrandInput.prototype, "brandType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, validation_1.ColumnExists)(brand_entity_1.Brand),
    __metadata("design:type", String)
], CreateBrandInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_mode_1.PaymentMode),
    (0, class_validator_1.IsEnum)(payment_mode_1.PaymentMode),
    __metadata("design:type", String)
], CreateBrandInput.prototype, "paymentMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => [create_payment_gateway_key_input_1.CreatePaymentGatewayKeyInput]),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => create_payment_gateway_key_input_1.CreatePaymentGatewayKeyInput),
    __metadata("design:type", Array)
], CreateBrandInput.prototype, "paymentGatewayKeys", void 0);
CreateBrandInput = __decorate([
    (0, graphql_1.InputType)()
], CreateBrandInput);
exports.CreateBrandInput = CreateBrandInput;
//# sourceMappingURL=create-brand.input.js.map