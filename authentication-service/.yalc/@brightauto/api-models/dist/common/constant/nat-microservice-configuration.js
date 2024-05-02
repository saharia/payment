"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "natMicroServiceConfiguration", {
    enumerable: true,
    get: function() {
        return natMicroServiceConfiguration;
    }
});
const _microservices = require("@nestjs/microservices");
// console.log("configurations -->", process.env);
const natServers = process.env.NAT_SERVERS ? process.env.NAT_SERVERS.split(',') : [];
const natMicroServiceConfiguration = {
    transport: _microservices.Transport.NATS,
    options: {
        // queue: "auth_queue",
        servers: natServers
    }
};

//# sourceMappingURL=nat-microservice-configuration.js.map