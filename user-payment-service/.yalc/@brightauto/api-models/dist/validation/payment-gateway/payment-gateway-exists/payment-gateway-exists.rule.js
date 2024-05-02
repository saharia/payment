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
exports.PaymentGatewayExistsRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let PaymentGatewayExistsRule = class PaymentGatewayExistsRule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const name = input['name'];
            let query = {};
            query['name'] = (0, typeorm_1.ILike)(name);
            await this.dataSource.getRepository(model).findOneByOrFail(query);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    defaultMessage(args) {
        return `The selected payment gateway is not exists!`;
    }
};
PaymentGatewayExistsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'RelationExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PaymentGatewayExistsRule);
exports.PaymentGatewayExistsRule = PaymentGatewayExistsRule;
//# sourceMappingURL=payment-gateway-exists.rule.js.map