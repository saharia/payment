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
    ApiServiceExceptionFilter: function() {
        return _apiserviceexceptionfilter.ApiServiceExceptionFilter;
    },
    MicroServiceExceptionFilter: function() {
        return _microserviceexceptionfilter.MicroServiceExceptionFilter;
    }
});
const _microserviceexceptionfilter = require("./micro-service-exception.filter");
const _apiserviceexceptionfilter = require("./api-service-exception.filter");

//# sourceMappingURL=index.js.map