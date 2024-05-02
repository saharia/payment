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
exports.BrandGatewayExistsRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const orm_config_1 = require("../../../orm-config");
const typeorm_1 = require("typeorm");
let BrandGatewayExistsRule = class BrandGatewayExistsRule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const paymentGatewayId = input['paymentGatewayId'];
            const primaryBrandId = input['primaryBrandId'];
            await this.dataSource.getRepository(orm_config_1.PaymentGatewayKey).findOneOrFail({ where: { brand: { id: primaryBrandId }, paymentGateway: { id: paymentGatewayId } } });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    defaultMessage(args) {
        return `Brand doesn't support this payment`;
    }
};
BrandGatewayExistsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'BrandGatewayExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BrandGatewayExistsRule);
exports.BrandGatewayExistsRule = BrandGatewayExistsRule;
//# sourceMappingURL=brand-gateway-exists.rule.js.map