"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentGatewayKey1676277745166 = void 0;
const typeorm_1 = require("typeorm");
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
const common_1 = require("../../../common");
class CreatePaymentGatewayKey1676277745166 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.paymentTableName.paymentGatewayKey;
        this.brandTableName = this.tablePrefix + common_1.paymentTableName.brand;
        this.brandForeignKeyColumn = common_1.paymentTableName.brand + '_id';
    }
    async up(queryRunner) {
        console.log("payment gateway key table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                ...primary_column_migration_1.primaryColumns,
                {
                    name: "client_id",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "client_secret",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "payment_gateway_id",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: this.brandForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
                ...default_column_migration_1.defaultColumns
            ],
        }), true);
        queryRunner.clearSqlMemory();
        const brandForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_key_brand_id",
            columnNames: [this.brandForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.brandTableName,
        });
        await queryRunner.createForeignKeys(this.tableName, [
            brandForeignKey,
        ]);
    }
    async down(queryRunner) {
        console.log("payment gateway key table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_key_brand_id",
            columnNames: [this.brandForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.brandTableName,
        });
        await queryRunner.dropForeignKeys(table, [userForeignKey]);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreatePaymentGatewayKey1676277745166 = CreatePaymentGatewayKey1676277745166;
//# sourceMappingURL=1676277745166-CreatePaymentGatewayKey.js.map