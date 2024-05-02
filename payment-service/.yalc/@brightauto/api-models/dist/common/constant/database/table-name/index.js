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
    authenticationTableName: function() {
        return _tablename.authenticationTableName;
    },
    paymentTableName: function() {
        return _tablename1.paymentTableName;
    }
});
const _tablename = require("./authentication/table-name");
const _tablename1 = require("./payment/table-name");

//# sourceMappingURL=index.js.map