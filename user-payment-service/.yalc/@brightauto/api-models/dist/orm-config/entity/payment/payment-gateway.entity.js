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
exports.PaymentGateway = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const payment_gateway_key_entity_1 = require("./payment-gateway-key.entity");
const payment_gateway_plan_entity_1 = require("./payment-gateway-plan.entity");
let PaymentGateway = class PaymentGateway extends base_entity_1.BaseEntityColumn {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGateway.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGateway.prototype, "apiSandboxTokenUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGateway.prototype, "apiSandboxPaymentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGateway.prototype, "apiTokenUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGateway.prototype, "apiPaymentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_key_entity_1.PaymentGatewayKey], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => payment_gateway_key_entity_1.PaymentGatewayKey, (paymentGatewayKey) => paymentGatewayKey.paymentGateway),
    __metadata("design:type", Array)
], PaymentGateway.prototype, "paymentGatewayKeys", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_plan_entity_1.PaymentGatewayPlan], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => payment_gateway_plan_entity_1.PaymentGatewayPlan, (paymentGatewayPlan) => paymentGatewayPlan.paymentGateway, { cascade: true }),
    __metadata("design:type", Array)
], PaymentGateway.prototype, "paymentGatewayPlans", void 0);
PaymentGateway = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PaymentGateway);
exports.PaymentGateway = PaymentGateway;
//# sourceMappingURL=payment-gateway.entity.js.map