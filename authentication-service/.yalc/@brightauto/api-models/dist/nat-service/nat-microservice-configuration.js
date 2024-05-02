"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "natConfiguration", {
    enumerable: true,
    get: function() {
        return natConfiguration;
    }
});
const _microservices = require("@nestjs/microservices");
function natConfiguration(natServers) {
    console.log("natServers -->", natServers);
    return {
        transport: _microservices.Transport.NATS,
        options: {
            // queue: "auth_queue",
            servers: natServers ? natServers.split(',') : []
        }
    };
}

//# sourceMappingURL=nat-microservice-configuration.js.map