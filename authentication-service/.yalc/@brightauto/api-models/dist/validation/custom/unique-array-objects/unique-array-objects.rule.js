"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UniqueArrayObjectsRule", {
    enumerable: true,
    get: function() {
        return UniqueArrayObjectsRule;
    }
});
const _classvalidator = require("class-validator");
const _lodash = require("lodash");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UniqueArrayObjectsRule = class UniqueArrayObjectsRule {
    async validate(value, args) {
        try {
            const column = args.constraints[0];
            const ids = (0, _lodash.map)(args.value, column);
            const counts = (0, _lodash.countBy)(ids);
            const duplicates = (0, _lodash.pickBy)(counts, (count)=>count > 1);
            return (0, _lodash.keys)(duplicates).length ? false : true;
        } catch (e) {
            // console.log(e)
            return false;
        }
    }
    defaultMessage(args) {
        return `${args.constraints[0]} must be unique!`;
    }
    constructor(){}
};
UniqueArrayObjectsRule = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'UniqueArrayObjects',
        async: true
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], UniqueArrayObjectsRule);

//# sourceMappingURL=unique-array-objects.rule.js.map