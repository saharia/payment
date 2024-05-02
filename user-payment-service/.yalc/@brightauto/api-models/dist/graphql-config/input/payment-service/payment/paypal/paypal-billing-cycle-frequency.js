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
exports.PaypalBillingCycleFrequency = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const subscription_interval_1 = require("../../../../../orm-config/entity/enum/subscription.interval");
let PaypalBillingCycleFrequency = class PaypalBillingCycleFrequency {
};
__decorate([
    (0, graphql_1.Field)(() => subscription_interval_1.SubscriptionInterval),
    (0, class_validator_1.IsEnum)(subscription_interval_1.SubscriptionInterval),
    __metadata("design:type", String)
], PaypalBillingCycleFrequency.prototype, "intervalUnit", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaypalBillingCycleFrequency.prototype, "intervalCount", void 0);
PaypalBillingCycleFrequency = __decorate([
    (0, graphql_1.InputType)()
], PaypalBillingCycleFrequency);
exports.PaypalBillingCycleFrequency = PaypalBillingCycleFrequency;
//# sourceMappingURL=paypal-billing-cycle-frequency.js.map