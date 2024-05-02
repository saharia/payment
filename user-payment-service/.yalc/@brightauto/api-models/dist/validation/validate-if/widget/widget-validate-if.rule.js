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
exports.WidgetValidateIfRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const payment_type_1 = require("../../../orm-config/entity/enum/payment-type");
const payment_gateway_entity_1 = require("../../../orm-config/entity/payment/payment-gateway.entity");
const typeorm_1 = require("typeorm");
let WidgetValidateIfRule = class WidgetValidateIfRule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        try {
            const [gatewayName] = args.constraints;
            const input = args.object;
            const paymentGatewayIds = input['paymentGatewayIds'];
            const paymentGateways = await this.dataSource.getRepository(payment_gateway_entity_1.PaymentGateway).find({ where: { id: (0, typeorm_1.In)(paymentGatewayIds) } });
            if (input['paymentType'] == payment_type_1.PaymentType.SUBSCRIBE && paymentGateways.length && !input[args.property]) {
                const gatewayNames = (0, lodash_1.map)(paymentGateways, (val) => val.name.toLowerCase());
                return gatewayNames.indexOf(gatewayName) <= -1;
            }
            else {
                return true;
            }
        }
        catch (e) {
            return true;
        }
        return true;
    }
    defaultMessage(args) {
        return `${args.property} is required!`;
    }
};
WidgetValidateIfRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'WidgetValidateIfRule', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], WidgetValidateIfRule);
exports.WidgetValidateIfRule = WidgetValidateIfRule;
//# sourceMappingURL=widget-validate-if.rule.js.map