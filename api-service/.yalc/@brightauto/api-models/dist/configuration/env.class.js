"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EnvironmentVariables", {
    enumerable: true,
    get: function() {
        return EnvironmentVariables;
    }
});
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _envenum = require("./env.enum");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let EnvironmentVariables = class EnvironmentVariables {
};
_ts_decorate([
    (0, _classvalidator.IsEnum)(_envenum.Environment),
    _ts_metadata("design:type", typeof _envenum.Environment === "undefined" ? Object : _envenum.Environment)
], EnvironmentVariables.prototype, "NODE_ENV", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "DB_TYPE", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "DB_HOST", void 0);
_ts_decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classtransformer.Type)(()=>Number),
    _ts_metadata("design:type", Number)
], EnvironmentVariables.prototype, "DB_PORT", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "DB_USERNAME", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "DB_PASSWORD", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "DB_NAME", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "JWT_SECRET", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "NAT_SERVERS", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "TABLE_PREFIX", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "PASSWORD_SALT", void 0);
_ts_decorate([
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], EnvironmentVariables.prototype, "MICROSERVICE_TIMEOUT", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], EnvironmentVariables.prototype, "MIGRATIONS_TABLE_NAME", void 0);

//# sourceMappingURL=env.class.js.map