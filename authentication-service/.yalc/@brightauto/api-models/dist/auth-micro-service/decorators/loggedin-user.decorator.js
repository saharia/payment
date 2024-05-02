"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoggedInUser", {
    enumerable: true,
    get: function() {
        return LoggedInUser;
    }
});
const _common = require("@nestjs/common");
const LoggedInUser = (0, _common.createParamDecorator)((data, context)=>{
    return context.switchToRpc().getData()['user'];
});

//# sourceMappingURL=loggedin-user.decorator.js.map