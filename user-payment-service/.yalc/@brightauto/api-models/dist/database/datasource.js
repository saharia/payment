"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const snake_naming_strategy_1 = require("./snake-naming.strategy");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    entityPrefix: 'tbl_',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rpp",
    namingStrategy: new snake_naming_strategy_1.SnakeNamingStrategy(),
    synchronize: false,
    migrations: [
        "src/database/migration/**/*{.js,.ts}"
    ],
    logging: true,
});
exports.default = AppDataSource;
AppDataSource.initialize()
    .then(() => console.log("Data Source has been initialized"))
    .catch((error) => console.error("Error initializing Data Source", error));
//# sourceMappingURL=datasource.js.map