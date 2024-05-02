"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GraphqlConfigModule", {
    enumerable: true,
    get: function() {
        return GraphqlConfigModule;
    }
});
const _common = require("@nestjs/common");
const _scalarmodule = require("./scalar/scalar.module");
const _inputmodule = require("./input/input.module");
const _responsemodule = require("./response/response.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let GraphqlConfigModule = class GraphqlConfigModule {
};
GraphqlConfigModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _scalarmodule.ScalarModule,
            _inputmodule.InputModule,
            _responsemodule.ResponseModule
        ]
    })
], GraphqlConfigModule);

//# sourceMappingURL=graphql-config.module.js.map