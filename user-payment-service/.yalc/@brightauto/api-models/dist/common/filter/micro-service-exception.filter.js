"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroServiceExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let MicroServiceExceptionFilter = class MicroServiceExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToRpc();
        let status = exception.getStatus ? exception.getStatus() : 500;
        let message = exception.message;
        const responseMessage = exception.getResponse ? exception.getResponse() : null;
        let errorResponse = {
            isError: true,
            code: status,
            timestamp: new Date().toTimeString(),
            message,
            responseMessage: responseMessage,
        };
        if (exception.isError) {
            errorResponse = exception;
        }
        console.log("Micro service exception filter ====>", message);
        return (0, rxjs_1.throwError)(() => errorResponse);
    }
};
MicroServiceExceptionFilter = __decorate([
    (0, common_1.Catch)()
], MicroServiceExceptionFilter);
exports.MicroServiceExceptionFilter = MicroServiceExceptionFilter;
//# sourceMappingURL=micro-service-exception.filter.js.map