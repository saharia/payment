"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateScalar", {
    enumerable: true,
    get: function() {
        return DateScalar;
    }
});
const _graphql = require("@nestjs/graphql");
const _graphql1 = require("graphql");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DateScalar = class DateScalar {
    parseValue(value) {
        return new Date(value); // value from the client
    }
    serialize(value) {
        return new Date(value); // value sent to the client
    }
    parseLiteral(ast) {
        if (ast.kind === _graphql1.Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    }
    constructor(){
        this.description = 'Date custom scalar type';
    }
};
DateScalar = _ts_decorate([
    (0, _graphql.Scalar)('Date', (type)=>Date)
], DateScalar);

//# sourceMappingURL=date.scalar.js.map