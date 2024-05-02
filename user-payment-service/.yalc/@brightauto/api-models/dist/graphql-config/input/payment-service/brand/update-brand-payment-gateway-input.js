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
exports.UpdateBrandPaymentGatewayInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const payment_gateway_entity_1 = require("../../../../orm-config/entity/payment/payment-gateway.entity");
const relation_exists_decorator_1 = require("../../../../validation/custom/relation-exists/relation-exists.decorator");
let UpdateBrandPaymentGatewayInput = class UpdateBrandPaymentGatewayInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(4),
    (0, relation_exists_decorator_1.RelationExists)(payment_gateway_entity_1.PaymentGateway),
    __metadata("design:type", String)
], UpdateBrandPaymentGatewayInput.prototype, "id", void 0);
UpdateBrandPaymentGatewayInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateBrandPaymentGatewayInput);
exports.UpdateBrandPaymentGatewayInput = UpdateBrandPaymentGatewayInput;
//# sourceMappingURL=update-brand-payment-gateway-input.js.map