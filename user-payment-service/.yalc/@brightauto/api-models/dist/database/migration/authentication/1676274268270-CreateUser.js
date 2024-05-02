"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1676274268270 = void 0;
const typeorm_1 = require("typeorm");
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
const common_1 = require("../../../common");
class CreateUser1676274268270 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.authenticationTableName.user;
    }
    async up(queryRunner) {
        console.log("user table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                ...primary_column_migration_1.primaryColumns,
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "first_name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "last_name",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "profile_picture",
                    type: "varchar",
                    isNullable: true
                },
                ...default_column_migration_1.defaultColumns
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateUser1676274268270 = CreateUser1676274268270;
//# sourceMappingURL=1676274268270-CreateUser.js.map