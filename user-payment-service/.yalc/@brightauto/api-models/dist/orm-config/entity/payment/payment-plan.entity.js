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
exports.PaymentPlan = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const payment_gateway_plan_entity_1 = require("./payment-gateway-plan.entity");
let PaymentPlan = class PaymentPlan extends base_entity_1.BaseEntityColumn {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentPlan.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_plan_entity_1.PaymentGatewayPlan]),
    (0, typeorm_1.OneToMany)(() => payment_gateway_plan_entity_1.PaymentGatewayPlan, (paymentGatewayPlan) => paymentGatewayPlan.paymentPlan),
    __metadata("design:type", Array)
], PaymentPlan.prototype, "paymentGatewayPlans", void 0);
PaymentPlan = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PaymentPlan);
exports.PaymentPlan = PaymentPlan;
//# sourceMappingURL=payment-plan.entity.js.map