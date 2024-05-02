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
exports.PaymentGatewayKey = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const brand_entity_1 = require("./brand.entity");
const payment_gateway_plan_entity_1 = require("./payment-gateway-plan.entity");
const payment_gateway_entity_1 = require("./payment-gateway.entity");
const paypal_entity_1 = require("./paypal.entity");
let PaymentGatewayKey = class PaymentGatewayKey extends base_entity_1.BaseEntityColumn {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGatewayKey.prototype, "clientId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentGatewayKey.prototype, "clientSecret", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_gateway_entity_1.PaymentGateway),
    (0, typeorm_1.ManyToOne)(() => payment_gateway_entity_1.PaymentGateway, (paymentGateway) => paymentGateway.paymentGatewayKeys),
    __metadata("design:type", payment_gateway_entity_1.PaymentGateway)
], PaymentGatewayKey.prototype, "paymentGateway", void 0);
__decorate([
    (0, graphql_1.Field)(() => brand_entity_1.Brand),
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, (brand) => brand.paymentGatewayKeys, { orphanedRowAction: "soft-delete" }),
    __metadata("design:type", brand_entity_1.Brand)
], PaymentGatewayKey.prototype, "brand", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_plan_entity_1.PaymentGatewayPlan]),
    (0, typeorm_1.ManyToMany)(() => payment_gateway_plan_entity_1.PaymentGatewayPlan, (paymentGatewayPlan) => paymentGatewayPlan.paymentGatewayKeys, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'payment_gateway_key_payment_gateway_plan'
    }),
    __metadata("design:type", Array)
], PaymentGatewayKey.prototype, "paymentGatewayPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => [paypal_entity_1.Paypal]),
    (0, typeorm_1.OneToMany)(() => paypal_entity_1.Paypal, (paypal) => paypal.paymentGatewayKey),
    __metadata("design:type", Array)
], PaymentGatewayKey.prototype, "paypals", void 0);
PaymentGatewayKey = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PaymentGatewayKey);
exports.PaymentGatewayKey = PaymentGatewayKey;
//# sourceMappingURL=payment-gateway-key.entity.js.map