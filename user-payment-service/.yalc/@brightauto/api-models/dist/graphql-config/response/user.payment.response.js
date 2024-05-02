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
exports.UserPaymentResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const json_object_1 = require("../../common/constant/json.object");
let UserPaymentResponse = class UserPaymentResponse {
};
__decorate([
    (0, graphql_1.Field)(() => json_object_1.JSONObject),
    __metadata("design:type", Object)
], UserPaymentResponse.prototype, "data", void 0);
UserPaymentResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UserPaymentResponse);
exports.UserPaymentResponse = UserPaymentResponse;
//# sourceMappingURL=user.payment.response.js.map