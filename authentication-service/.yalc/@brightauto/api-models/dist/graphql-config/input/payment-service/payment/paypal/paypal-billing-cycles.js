"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaypalBillingCycles", {
    enumerable: true,
    get: function() {
        return PaypalBillingCycles;
    }
});
const _graphql = require("@nestjs/graphql");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _paypalbillingcyclefrequency = require("./paypal-billing-cycle-frequency");
const _paypalbillingcycleprice = require("./paypal-billing-cycle-price");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PaypalBillingCycles = class PaypalBillingCycles {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalbillingcyclefrequency.PaypalBillingCycleFrequency),
    (0, _classtransformer.Type)(()=>_paypalbillingcyclefrequency.PaypalBillingCycleFrequency),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalbillingcyclefrequency.PaypalBillingCycleFrequency === "undefined" ? Object : _paypalbillingcyclefrequency.PaypalBillingCycleFrequency)
], PaypalBillingCycles.prototype, "frequency", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.Min)(0),
    (0, _classvalidator.Max)(999),
    _ts_metadata("design:type", Number)
], PaypalBillingCycles.prototype, "totalCycles", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_paypalbillingcycleprice.PaypalBillingCyclePrice),
    (0, _classtransformer.Type)(()=>_paypalbillingcycleprice.PaypalBillingCyclePrice),
    (0, _classvalidator.ValidateNested)(),
    _ts_metadata("design:type", typeof _paypalbillingcycleprice.PaypalBillingCyclePrice === "undefined" ? Object : _paypalbillingcycleprice.PaypalBillingCyclePrice)
], PaypalBillingCycles.prototype, "price", void 0);
PaypalBillingCycles = _ts_decorate([
    (0, _graphql.InputType)()
], PaypalBillingCycles);

//# sourceMappingURL=paypal-billing-cycles.js.map