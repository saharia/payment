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
exports.RelationExistsRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const typeorm_1 = require("typeorm");
let RelationExistsRule = class RelationExistsRule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const id = input['id'];
            console.log(Array.isArray(value));
            if (Array.isArray(value)) {
                let query = { id: (0, typeorm_1.In)(value) };
                let modelData = await this.dataSource.getRepository(model).find({ where: query });
                if (modelData.length == value.length) {
                    return true;
                }
                else {
                    if (modelData.length) {
                        const modelIds = (0, lodash_1.map)(modelData, 'id');
                        const missedIds = (0, lodash_1.difference)(value, modelIds);
                        args.constraints[1] = missedIds.join(", ");
                    }
                    else {
                        args.constraints[1] = value.join(", ");
                    }
                    return false;
                }
            }
            else {
                let query = { id: value };
                await this.dataSource.getRepository(model).findOneByOrFail(query);
            }
        }
        catch (e) {
            return false;
        }
        return true;
    }
    defaultMessage(args) {
        if (args.constraints[1]) {
            return `${args.constraints[1]} not found!`;
        }
        else {
            return `${args.property} not found!`;
        }
    }
};
RelationExistsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'RelationExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], RelationExistsRule);
exports.RelationExistsRule = RelationExistsRule;
//# sourceMappingURL=relation-exists.rule.js.map