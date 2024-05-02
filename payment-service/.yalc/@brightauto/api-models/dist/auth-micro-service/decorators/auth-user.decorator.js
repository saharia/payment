"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthUser", {
    enumerable: true,
    get: function() {
        return AuthUser;
    }
});
const _common = require("@nestjs/common");
const AuthUser = (0, _common.createParamDecorator)((data, context)=>{
    /* console.log('Auth User decorator req -->', context.getArgs());
    console.log('Auth User decorator req -->', context.switchToRpc().getContext()['req']);
    console.log('Auth User decorator user model -->', context.switchToRpc().getData()['user']); */ return context.switchToRpc().getContext()['user'];
});

//# sourceMappingURL=auth-user.decorator.js.map