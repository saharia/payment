"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ApiServiceExceptionFilter", {
    enumerable: true,
    get: function() {
        return ApiServiceExceptionFilter;
    }
});
const _common = require("@nestjs/common");
const _graphql = require("graphql");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ApiServiceExceptionFilter = class ApiServiceExceptionFilter {
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
            responseMessage: responseMessage
        };
        if (exception.isError) {
            // console.log("===================Exception from service ==================");
            errorResponse = exception;
        }
        console.log(errorResponse);
        // console.log("Micro service exception filter ====>", message);
        // console.log(errorResponse);
        throw new _graphql.GraphQLError(message, {
            extensions: errorResponse
        });
    }
};
ApiServiceExceptionFilter = _ts_decorate([
    (0, _common.Catch)()
], ApiServiceExceptionFilter);

//# sourceMappingURL=api-service-exception.filter.js.map