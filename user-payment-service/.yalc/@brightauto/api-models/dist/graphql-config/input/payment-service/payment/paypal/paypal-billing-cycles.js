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
exports.PaypalBillingCycles = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const paypal_billing_cycle_frequency_1 = require("./paypal-billing-cycle-frequency");
const paypal_billing_cycle_price_1 = require("./paypal-billing-cycle-price");
let PaypalBillingCycles = class PaypalBillingCycles {
};
__decorate([
    (0, graphql_1.Field)(() => paypal_billing_cycle_frequency_1.PaypalBillingCycleFrequency),
    (0, class_transformer_1.Type)(() => paypal_billing_cycle_frequency_1.PaypalBillingCycleFrequency),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_billing_cycle_frequency_1.PaypalBillingCycleFrequency)
], PaypalBillingCycles.prototype, "frequency", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(999),
    __metadata("design:type", Number)
], PaypalBillingCycles.prototype, "totalCycles", void 0);
__decorate([
    (0, graphql_1.Field)(() => paypal_billing_cycle_price_1.PaypalBillingCyclePrice),
    (0, class_transformer_1.Type)(() => paypal_billing_cycle_price_1.PaypalBillingCyclePrice),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", paypal_billing_cycle_price_1.PaypalBillingCyclePrice)
], PaypalBillingCycles.prototype, "price", void 0);
PaypalBillingCycles = __decorate([
    (0, graphql_1.InputType)()
], PaypalBillingCycles);
exports.PaypalBillingCycles = PaypalBillingCycles;
//# sourceMappingURL=paypal-billing-cycles.js.map