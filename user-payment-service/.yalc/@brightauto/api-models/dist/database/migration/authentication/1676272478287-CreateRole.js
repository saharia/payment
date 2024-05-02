"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRole1676272478287 = void 0;
const common_1 = require("../../../common");
const typeorm_1 = require("typeorm");
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
class CreateRole1676272478287 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.authenticationTableName.role;
    }
    async up(queryRunner) {
        console.log("role table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                ...primary_column_migration_1.primaryColumns,
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                ...default_column_migration_1.defaultColumns
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateRole1676272478287 = CreateRole1676272478287;
//# sourceMappingURL=1676272478287-CreateRole.js.map