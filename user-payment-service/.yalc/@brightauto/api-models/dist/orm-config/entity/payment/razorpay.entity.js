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
exports.RazorpayEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const payment_gateway_key_entity_1 = require("./payment-gateway-key.entity");
let RazorpayEntity = class RazorpayEntity extends base_entity_1.BaseEntityColumn {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RazorpayEntity.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RazorpayEntity.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RazorpayEntity.prototype, "returnUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RazorpayEntity.prototype, "cancelUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RazorpayEntity.prototype, "paymentType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RazorpayEntity.prototype, "paymentMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_gateway_key_entity_1.PaymentGatewayKey),
    (0, typeorm_1.ManyToOne)(() => payment_gateway_key_entity_1.PaymentGatewayKey, (paymentGatewayKey) => paymentGatewayKey.paypals),
    __metadata("design:type", payment_gateway_key_entity_1.PaymentGatewayKey)
], RazorpayEntity.prototype, "paymentGatewayKey", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], RazorpayEntity.prototype, "orderJson", void 0);
RazorpayEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({
        name: 'razorpay'
    })
], RazorpayEntity);
exports.RazorpayEntity = RazorpayEntity;
//# sourceMappingURL=razorpay.entity.js.map