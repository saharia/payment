"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JSONObjectScalar", {
    enumerable: true,
    get: function() {
        return JSONObjectScalar;
    }
});
const _graphql = require("@nestjs/graphql");
const _graphql1 = require("graphql");
const _jsonobject = require("../../common/constant/json.object");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let JSONObjectScalar = class JSONObjectScalar {
    parseValue(value) {
        return value; // this is the value a client sends to the server
    }
    serialize(value) {
        return value; // this is the value the server sends to the client
    }
    parseLiteral(ast) {
        if (ast.kind === _graphql1.Kind.OBJECT) {
            return new Object(ast.value);
        }
        return null;
    }
    constructor(){
        this.description = 'JSONObject custom scalar type';
    }
};
JSONObjectScalar = _ts_decorate([
    (0, _graphql.Scalar)('JSONObject', (type)=>_jsonobject.JSONObject)
], JSONObjectScalar);

//# sourceMappingURL=json.scalar.js.map