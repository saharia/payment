"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidationModule", {
    enumerable: true,
    get: function() {
        return _validationmodule.ValidationModule;
    }
});
const _validationmodule = require("./validation.module");
_export_star(require("./brand"), exports);
_export_star(require("./custom"), exports);
_export_star(require("./payment-gateway"), exports);
_export_star(require("./validate-if"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=index.js.map