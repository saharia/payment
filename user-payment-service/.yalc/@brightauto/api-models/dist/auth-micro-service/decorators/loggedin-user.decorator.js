"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedInUser = void 0;
const common_1 = require("@nestjs/common");
exports.LoggedInUser = (0, common_1.createParamDecorator)((data, context) => {
    return context.switchToRpc().getData()['user'];
});
//# sourceMappingURL=loggedin-user.decorator.js.map