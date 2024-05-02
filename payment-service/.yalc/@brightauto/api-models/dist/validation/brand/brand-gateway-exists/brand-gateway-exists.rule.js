"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BrandGatewayExistsRule", {
    enumerable: true,
    get: function() {
        return BrandGatewayExistsRule;
    }
});
const _common = require("@nestjs/common");
const _classvalidator = require("class-validator");
const _ormconfig = require("../../../orm-config");
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
let BrandGatewayExistsRule = class BrandGatewayExistsRule {
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const paymentGatewayId = input['paymentGatewayId'];
            const primaryBrandId = input['primaryBrandId'];
            await this.dataSource.getRepository(_ormconfig.PaymentGatewayKey).findOneOrFail({
                where: {
                    brand: {
                        id: primaryBrandId
                    },
                    paymentGateway: {
                        id: paymentGatewayId
                    }
                }
            });
        } catch (e) {
            // console.log(e)
            return false;
        }
        return true;
    }
    defaultMessage(args) {
        // console.log('relation constraint array -->', args.constraints[1]);
        return `Brand doesn't support this payment`;
    }
    constructor(dataSource){
        this.dataSource = dataSource;
    }
};
BrandGatewayExistsRule = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'BrandGatewayExists',
        async: true
    }),
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource
    ])
], BrandGatewayExistsRule);

//# sourceMappingURL=brand-gateway-exists.rule.js.map