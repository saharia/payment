"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlConfigModule = void 0;
const common_1 = require("@nestjs/common");
const scalar_module_1 = require("./scalar/scalar.module");
const input_module_1 = require("./input/input.module");
const response_module_1 = require("./response/response.module");
let GraphqlConfigModule = class GraphqlConfigModule {
};
GraphqlConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [scalar_module_1.ScalarModule, input_module_1.InputModule, response_module_1.ResponseModule]
    })
], GraphqlConfigModule);
exports.GraphqlConfigModule = GraphqlConfigModule;
//# sourceMappingURL=graphql-config.module.js.map