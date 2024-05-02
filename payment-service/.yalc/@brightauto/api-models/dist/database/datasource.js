"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _typeorm = require("typeorm");
const _snakenamingstrategy = require("./snake-naming.strategy");
const AppDataSource = new _typeorm.DataSource({
    type: "postgres",
    entityPrefix: 'tbl_',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rpp",
    namingStrategy: new _snakenamingstrategy.SnakeNamingStrategy(),
    synchronize: false,
    migrations: [
        "src/database/migration/**/*{.js,.ts}"
    ],
    logging: true
});
const _default = AppDataSource;
AppDataSource.initialize().then(()=>console.log("Data Source has been initialized")).catch((error)=>console.error("Error initializing Data Source", error));

//# sourceMappingURL=datasource.js.map