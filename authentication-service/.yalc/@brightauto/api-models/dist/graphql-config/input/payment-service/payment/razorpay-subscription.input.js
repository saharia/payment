"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RazorpaySubscriptionInput", {
    enumerable: true,
    get: function() {
        return RazorpaySubscriptionInput;
    }
});
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
const _subscriptioninterval = require("../../../../orm-config/entity/enum/subscription.interval");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RazorpaySubscriptionInput = class RazorpaySubscriptionInput {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_subscriptioninterval.SubscriptionInterval),
    (0, _classvalidator.IsEnum)(_subscriptioninterval.SubscriptionInterval),
    _ts_metadata("design:type", typeof _subscriptioninterval.SubscriptionInterval === "undefined" ? Object : _subscriptioninterval.SubscriptionInterval)
], RazorpaySubscriptionInput.prototype, "period", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], RazorpaySubscriptionInput.prototype, "interval", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], RazorpaySubscriptionInput.prototype, "description", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], RazorpaySubscriptionInput.prototype, "quantity", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], RazorpaySubscriptionInput.prototype, "totalCount", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Boolean),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsBoolean)(),
    _ts_metadata("design:type", Boolean)
], RazorpaySubscriptionInput.prototype, "customerNotify", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>Number),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], RazorpaySubscriptionInput.prototype, "amount", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], RazorpaySubscriptionInput.prototype, "currency", void 0);
RazorpaySubscriptionInput = _ts_decorate([
    (0, _graphql.InputType)()
], RazorpaySubscriptionInput);

//# sourceMappingURL=razorpay-subscription.input.js.map