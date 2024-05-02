"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BrandGatewayExists: function() {
        return _brandgatewayexistsdecorator.BrandGatewayExists;
    },
    BrandGatewayExistsRule: function() {
        return _brandgatewayexistsrule.BrandGatewayExistsRule;
    }
});
const _brandgatewayexistsdecorator = require("./brand-gateway-exists/brand-gateway-exists.decorator");
const _brandgatewayexistsrule = require("./brand-gateway-exists/brand-gateway-exists.rule");

//# sourceMappingURL=index.js.map