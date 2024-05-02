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
exports.ColumnExistsRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let ColumnExistsRule = class ColumnExistsRule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const columnName = args.property;
            const id = input['id'];
            let query = {};
            query[columnName] = (0, typeorm_1.ILike)(value);
            if (id) {
                query['id'] = (0, typeorm_1.Not)(id);
            }
            await this.dataSource.getRepository(model).findOneByOrFail(query);
        }
        catch (e) {
            return true;
        }
        return false;
    }
    defaultMessage(args) {
        return `${args.property} already exists!`;
    }
};
ColumnExistsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'ColumnExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ColumnExistsRule);
exports.ColumnExistsRule = ColumnExistsRule;
//# sourceMappingURL=column-exists.rule.js.map