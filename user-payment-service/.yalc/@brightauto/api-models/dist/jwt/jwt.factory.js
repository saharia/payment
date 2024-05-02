"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtFactory = void 0;
const config_1 = require("@nestjs/config");
const configuration_1 = require("../configuration");
exports.jwtFactory = {
    imports: [configuration_1.ConfigurationModule],
    useFactory: async (configService) => ({
        secret: configService.get('JWT_SECRET'),
    }),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=jwt.factory.js.map