"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "jwtFactory", {
    enumerable: true,
    get: function() {
        return jwtFactory;
    }
});
const _config = require("@nestjs/config");
const _configuration = require("../configuration");
const jwtFactory = {
    imports: [
        _configuration.ConfigurationModule
    ],
    useFactory: async (configService)=>({
            secret: configService.get('JWT_SECRET')
        }),
    inject: [
        _config.ConfigService
    ]
};

//# sourceMappingURL=jwt.factory.js.map