"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "envValidate", {
    enumerable: true,
    get: function() {
        return envValidate;
    }
});
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _envclass = require("./env.class");
function envValidate(config) {
    const validatedConfig = (0, _classtransformer.plainToInstance)(_envclass.EnvironmentVariables, config, {
        enableImplicitConversion: true
    });
    const errors = (0, _classvalidator.validateSync)(validatedConfig, {
        skipMissingProperties: false
    });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}

//# sourceMappingURL=env.validation.js.map