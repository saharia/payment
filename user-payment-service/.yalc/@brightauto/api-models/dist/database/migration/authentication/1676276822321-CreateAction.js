"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAction1676276822321 = void 0;
const typeorm_1 = require("typeorm");
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
const common_1 = require("../../../common");
class CreateAction1676276822321 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.authenticationTableName.action;
    }
    async up(queryRunner) {
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
exports.CreateAction1676276822321 = CreateAction1676276822321;
//# sourceMappingURL=1676276822321-CreateAction.js.map