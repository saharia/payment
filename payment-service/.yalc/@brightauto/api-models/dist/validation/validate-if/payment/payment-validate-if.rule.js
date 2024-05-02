"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentValidateIfRule", {
    enumerable: true,
    get: function() {
        return PaymentValidateIfRule;
    }
});
const _common = require("@nestjs/common");
const _classvalidator = require("class-validator");
const _paymenttype = require("../../../orm-config/entity/enum/payment-type");
const _typeorm = require("typeorm");
const _ormconfig = require("../../../orm-config");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaymentValidateIfRule = class PaymentValidateIfRule {
    async validate(value, args) {
        try {
            const [gatewayName, type] = args.constraints;
            const input = args.object;
            // console.log(gatewayName);
            const paymentGatewayId = input['paymentGatewayId'];
            const primaryBrandId = input['primaryBrandId'];
            const paymentGatewayKey = await this.dataSource.getRepository(_ormconfig.PaymentGatewayKey).findOne({
                where: {
                    brand: {
                        id: primaryBrandId
                    },
                    paymentGateway: {
                        id: paymentGatewayId
                    }
                },
                relations: [
                    "paymentGateway"
                ]
            });
            if (input['paymentType'] == _paymenttype.PaymentType.SUBSCRIBE) {
                // console.log(gatewayName, input, args.property, paymentGatewayKey.paymentGateway.name)
                if (paymentGatewayKey && !input[args.property] && paymentGatewayKey.paymentGateway.name.toLowerCase() == gatewayName) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    defaultMessage(args) {
        return `${args.property} is required!`;
    }
    constructor(dataSource){
        this.dataSource = dataSource;
    }
};
PaymentValidateIfRule = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'PaymentValidateIfRule',
        async: true
    }),
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource
    ])
], PaymentValidateIfRule);

//# sourceMappingURL=payment-validate-if.rule.js.map