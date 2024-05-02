"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RelationExistsRule", {
    enumerable: true,
    get: function() {
        return RelationExistsRule;
    }
});
const _common = require("@nestjs/common");
const _classvalidator = require("class-validator");
const _lodash = require("lodash");
const _typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RelationExistsRule = class RelationExistsRule {
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const id = input['id'];
            console.log(Array.isArray(value));
            if (Array.isArray(value)) {
                let query = {
                    id: (0, _typeorm.In)(value)
                };
                let modelData = await this.dataSource.getRepository(model).find({
                    where: query
                });
                if (modelData.length == value.length) {
                    return true;
                } else {
                    if (modelData.length) {
                        const modelIds = (0, _lodash.map)(modelData, 'id');
                        const missedIds = (0, _lodash.difference)(value, modelIds);
                        // console.log(modelIds, missedIds);
                        args.constraints[1] = missedIds.join(", ");
                    } else {
                        args.constraints[1] = value.join(", ");
                    }
                    return false;
                }
            } else {
                let query = {
                    id: value
                };
                await this.dataSource.getRepository(model).findOneByOrFail(query);
            }
        } catch (e) {
            // console.log(e)
            return false;
        }
        return true;
    }
    defaultMessage(args) {
        // console.log('relation constraint array -->', args.constraints[1]);
        if (args.constraints[1]) {
            return `${args.constraints[1]} not found!`;
        } else {
            return `${args.property} not found!`;
        }
    }
    constructor(dataSource){
        this.dataSource = dataSource;
    }
};
RelationExistsRule = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'RelationExists',
        async: true
    }),
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource
    ])
], RelationExistsRule);

//# sourceMappingURL=relation-exists.rule.js.map