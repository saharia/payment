"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandType = void 0;
const graphql_1 = require("@nestjs/graphql");
var BrandType;
(function (BrandType) {
    BrandType["APP"] = "APP";
    BrandType["WEBSITE"] = "WEBSITE";
})(BrandType = exports.BrandType || (exports.BrandType = {}));
(0, graphql_1.registerEnumType)(BrandType, {
    name: 'BrandType',
});
//# sourceMappingURL=brand-type.js.map