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
exports.StripeSubscriptionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const subscription_interval_1 = require("../../../../orm-config/entity/enum/subscription.interval");
let StripeSubscriptionInput = class StripeSubscriptionInput {
};
__decorate([
    (0, graphql_1.Field)(() => subscription_interval_1.SubscriptionInterval),
    (0, class_validator_1.IsEnum)(subscription_interval_1.SubscriptionInterval),
    __metadata("design:type", String)
], StripeSubscriptionInput.prototype, "interval", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StripeSubscriptionInput.prototype, "intervalCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StripeSubscriptionInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StripeSubscriptionInput.prototype, "currency", void 0);
StripeSubscriptionInput = __decorate([
    (0, graphql_1.InputType)()
], StripeSubscriptionInput);
exports.StripeSubscriptionInput = StripeSubscriptionInput;
//# sourceMappingURL=stripe-subscription.input.js.map