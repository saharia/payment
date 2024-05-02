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
exports.UniqueArrayObjectsRule = void 0;
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
let UniqueArrayObjectsRule = class UniqueArrayObjectsRule {
    constructor() { }
    async validate(value, args) {
        try {
            const column = args.constraints[0];
            const ids = (0, lodash_1.map)(args.value, column);
            const counts = (0, lodash_1.countBy)(ids);
            const duplicates = (0, lodash_1.pickBy)(counts, count => count > 1);
            return (0, lodash_1.keys)(duplicates).length ? false : true;
        }
        catch (e) {
            return false;
        }
    }
    defaultMessage(args) {
        return `${args.constraints[0]} must be unique!`;
    }
};
UniqueArrayObjectsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'UniqueArrayObjects', async: true }),
    __metadata("design:paramtypes", [])
], UniqueArrayObjectsRule);
exports.UniqueArrayObjectsRule = UniqueArrayObjectsRule;
//# sourceMappingURL=unique-array-objects.rule.js.map