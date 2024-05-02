"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.natMicroServiceConfiguration = void 0;
const microservices_1 = require("@nestjs/microservices");
const natServers = process.env.NAT_SERVERS ? process.env.NAT_SERVERS.split(',') : [];
exports.natMicroServiceConfiguration = {
    transport: microservices_1.Transport.NATS,
    options: {
        servers: natServers,
    },
};
//# sourceMappingURL=nat-microservice-configuration.js.map