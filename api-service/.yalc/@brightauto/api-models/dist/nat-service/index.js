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
    NatMicroServiceModule: function() {
        return _natmicroservicemodule.NatMicroServiceModule;
    },
    NatService: function() {
        return _natservice.NatService;
    },
    natConfiguration: function() {
        return _natmicroserviceconfiguration.natConfiguration;
    }
});
const _natmicroservicemodule = require("./nat-micro-service.module");
const _natmicroserviceconfiguration = require("./nat-microservice-configuration");
const _natservice = require("./nat.service");

//# sourceMappingURL=index.js.map