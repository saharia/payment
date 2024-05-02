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
exports.PaymentGatewayPlan = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const payment_gateway_key_entity_1 = require("./payment-gateway-key.entity");
const payment_gateway_entity_1 = require("./payment-gateway.entity");
const payment_plan_entity_1 = require("./payment-plan.entity");
let PaymentGatewayPlan = class PaymentGatewayPlan extends base_entity_1.BaseEntityColumn {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaymentGatewayPlan.prototype, "percentage", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_plan_entity_1.PaymentPlan),
    (0, typeorm_1.ManyToOne)(() => payment_plan_entity_1.PaymentPlan, (paymentPlan) => paymentPlan.paymentGatewayPlans),
    __metadata("design:type", payment_plan_entity_1.PaymentPlan)
], PaymentGatewayPlan.prototype, "paymentPlan", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_gateway_entity_1.PaymentGateway),
    (0, typeorm_1.ManyToOne)(() => payment_gateway_entity_1.PaymentGateway, (paymentGateway) => paymentGateway.paymentGatewayPlans, { orphanedRowAction: "soft-delete" }),
    __metadata("design:type", payment_gateway_entity_1.PaymentGateway)
], PaymentGatewayPlan.prototype, "paymentGateway", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_key_entity_1.PaymentGatewayKey]),
    (0, typeorm_1.ManyToMany)(() => payment_gateway_key_entity_1.PaymentGatewayKey, (paymentGatewayKey) => paymentGatewayKey.paymentGatewayPlans, { orphanedRowAction: "soft-delete" }),
    __metadata("design:type", Array)
], PaymentGatewayPlan.prototype, "paymentGatewayKeys", void 0);
PaymentGatewayPlan = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PaymentGatewayPlan);
exports.PaymentGatewayPlan = PaymentGatewayPlan;
//# sourceMappingURL=payment-gateway-plan.entity.js.map