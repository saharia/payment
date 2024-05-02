"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrmTablePrefix", {
    enumerable: true,
    get: function() {
        return _ormtableprefix.OrmTablePrefix;
    }
});
_export_star(require("./table-name"), exports);
const _ormtableprefix = require("./orm-table.prefix");
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