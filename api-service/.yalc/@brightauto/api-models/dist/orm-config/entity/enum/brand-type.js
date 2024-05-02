"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BrandType", {
    enumerable: true,
    get: function() {
        return BrandType;
    }
});
const _graphql = require("@nestjs/graphql");
var BrandType;
(function(BrandType) {
    BrandType["APP"] = "APP";
    BrandType["WEBSITE"] = "WEBSITE";
})(BrandType || (BrandType = {}));
(0, _graphql.registerEnumType)(BrandType, {
    name: 'BrandType'
});

//# sourceMappingURL=brand-type.js.map