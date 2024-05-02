"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentGateway1676277636101 = void 0;
const typeorm_1 = require("typeorm");
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
const common_1 = require("../../../common");
class CreatePaymentGateway1676277636101 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.paymentTableName.paymentGateway;
    }
    async up(queryRunner) {
        console.log("payment gateway table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                ...primary_column_migration_1.primaryColumns,
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "api_sandbox_token_url",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "api_sandbox_payment_url",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "api_token_url",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "api_payment_url",
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
exports.CreatePaymentGateway1676277636101 = CreatePaymentGateway1676277636101;
//# sourceMappingURL=1676277636101-CreatePaymentGateway.js.map