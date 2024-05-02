"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NameExistsRule", {
    enumerable: true,
    get: function() {
        return NameExistsRule;
    }
});
const _common = require("@nestjs/common");
const _classvalidator = require("class-validator");
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
let NameExistsRule = class NameExistsRule {
    async validate(value, args) {
        try {
            const [model] = args.constraints;
            const input = args.object;
            const id = input['id'];
            let query = {
                name: (0, _typeorm.ILike)(value)
            };
            if (id) {
                query['id'] = (0, _typeorm.Not)(id);
            }
            await this.dataSource.getRepository(model).findOneByOrFail(query);
        } catch (e) {
            // console.log(e)
            return true;
        }
        return false;
    }
    defaultMessage(args) {
        return `Name already exists!`;
    }
    constructor(dataSource){
        this.dataSource = dataSource;
    }
};
NameExistsRule = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'NameExists',
        async: true
    }),
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource
    ])
], NameExistsRule);

//# sourceMappingURL=name-exists.rule.js.map