"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.natConfiguration = void 0;
const microservices_1 = require("@nestjs/microservices");
function natConfiguration(natServers) {
    console.log("natServers -->", natServers);
    return {
        transport: microservices_1.Transport.NATS,
        options: {
            servers: natServers ? natServers.split(',') : [],
        },
    };
}
exports.natConfiguration = natConfiguration;
//# sourceMappingURL=nat-microservice-configuration.js.map