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
    DateScalar: function() {
        return _datescalar.DateScalar;
    },
    JSONObjectScalar: function() {
        return _jsonscalar.JSONObjectScalar;
    }
});
const _datescalar = require("./date.scalar");
const _jsonscalar = require("./json.scalar");

//# sourceMappingURL=index.js.map