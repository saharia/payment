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
exports.Brand = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../authentication/user.entity");
const base_entity_1 = require("../base.entity");
const payment_mode_1 = require("../enum/payment-mode");
const brand_type_1 = require("../enum/brand-type");
const payment_gateway_key_entity_1 = require("./payment-gateway-key.entity");
const generate_api_key_1 = require("../../../crypto-auth-service/generate-api-key");
let Brand = class Brand extends base_entity_1.BaseEntityColumn {
    async createApiKey() {
        this.apiKey = (0, generate_api_key_1.generateApiKey)();
    }
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: "enum",
        enum: brand_type_1.BrandType,
        default: brand_type_1.BrandType.WEBSITE
    }),
    __metadata("design:type", String)
], Brand.prototype, "brandType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: "enum",
        enum: payment_mode_1.PaymentMode,
        default: payment_mode_1.PaymentMode.SANDBOX
    }),
    __metadata("design:type", String)
], Brand.prototype, "paymentMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_gateway_key_entity_1.PaymentGatewayKey]),
    (0, typeorm_1.OneToMany)(() => payment_gateway_key_entity_1.PaymentGatewayKey, (paymentGatewayKey) => paymentGatewayKey.brand, { cascade: true }),
    __metadata("design:type", Array)
], Brand.prototype, "paymentGatewayKeys", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.brands),
    __metadata("design:type", user_entity_1.User)
], Brand.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brand.prototype, "apiKey", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Brand.prototype, "createApiKey", null);
Brand = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Brand);
exports.Brand = Brand;
//# sourceMappingURL=brand.entity.js.map