"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WidgetValidateIfRule", {
    enumerable: true,
    get: function() {
        return WidgetValidateIfRule;
    }
});
const _common = require("@nestjs/common");
const _classvalidator = require("class-validator");
const _lodash = require("lodash");
const _paymenttype = require("../../../orm-config/entity/enum/payment-type");
const _paymentgatewayentity = require("../../../orm-config/entity/payment/payment-gateway.entity");
const _typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let WidgetValidateIfRule = class WidgetValidateIfRule {
    async validate(value, args) {
        try {
            const [gatewayName] = args.constraints;
            const input = args.object;
            // console.log(gatewayName);
            const paymentGatewayIds = input['paymentGatewayIds'];
            const paymentGateways = await this.dataSource.getRepository(_paymentgatewayentity.PaymentGateway).find({
                where: {
                    id: (0, _typeorm.In)(paymentGatewayIds)
                }
            });
            if (input['paymentType'] == _paymenttype.PaymentType.SUBSCRIBE && paymentGateways.length && !input[args.property]) {
                const gatewayNames = (0, _lodash.map)(paymentGateways, (val)=>val.name.toLowerCase());
                // console.log(gatewayNames);
                return gatewayNames.indexOf(gatewayName) <= -1;
            } else {
                return true;
            }
        } catch (e) {
            // console.log(e)
            return true;
        }
        return true;
    }
    defaultMessage(args) {
        return `${args.property} is required!`;
    }
    constructor(dataSource){
        this.dataSource = dataSource;
    }
};
WidgetValidateIfRule = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'WidgetValidateIfRule',
        async: true
    }),
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource
    ])
], WidgetValidateIfRule);

//# sourceMappingURL=widget-validate-if.rule.js.map