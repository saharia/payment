"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrmConfigModule", {
    enumerable: true,
    get: function() {
        return OrmConfigModule;
    }
});
const _common = require("@nestjs/common");
const _entitymodule = require("./entity/entity.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let OrmConfigModule = class OrmConfigModule {
};
OrmConfigModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _entitymodule.EntityModule
        ]
    })
], OrmConfigModule);

//# sourceMappingURL=orm-config.module.js.map