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
exports.PaymentValidateIfRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const payment_type_1 = require("../../../orm-config/entity/enum/payment-type");
const typeorm_1 = require("typeorm");
const orm_config_1 = require("../../../orm-config");
let PaymentValidateIfRule = class PaymentValidateIfRule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        try {
            const [gatewayName, type] = args.constraints;
            const input = args.object;
            const paymentGatewayId = input['paymentGatewayId'];
            const primaryBrandId = input['primaryBrandId'];
            const paymentGatewayKey = await this.dataSource.getRepository(orm_config_1.PaymentGatewayKey).findOne({ where: { brand: { id: primaryBrandId }, paymentGateway: { id: paymentGatewayId } },
                relations: ["paymentGateway"] });
            if (input['paymentType'] == payment_type_1.PaymentType.SUBSCRIBE) {
                if (paymentGatewayKey && !input[args.property] && paymentGatewayKey.paymentGateway.name.toLowerCase() == gatewayName) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    defaultMessage(args) {
        return `${args.property} is required!`;
    }
};
PaymentValidateIfRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'PaymentValidateIfRule', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PaymentValidateIfRule);
exports.PaymentValidateIfRule = PaymentValidateIfRule;
//# sourceMappingURL=payment-validate-if.rule.js.map