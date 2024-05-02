"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentGatewayKey1676277745166", {
    enumerable: true,
    get: function() {
        return CreatePaymentGatewayKey1676277745166;
    }
});
const _typeorm = require("typeorm");
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
const _common = require("../../../common");
let CreatePaymentGatewayKey1676277745166 = class CreatePaymentGatewayKey1676277745166 {
    async up(queryRunner) {
        console.log("payment gateway key table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
            name: this.tableName,
            columns: [
                ..._primarycolumnmigration.primaryColumns,
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
                ..._defaultcolumnmigration.defaultColumns
            ]
        }), true);
        // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();
        const brandForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_key_brand_id",
            columnNames: [
                this.brandForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.brandTableName
        });
        await queryRunner.createForeignKeys(this.tableName, [
            brandForeignKey
        ]);
    }
    async down(queryRunner) {
        console.log("payment gateway key table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_key_brand_id",
            columnNames: [
                this.brandForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.brandTableName
        });
        await queryRunner.dropForeignKeys(table, [
            userForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
    constructor(){
        this.tablePrefix = process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '';
        this.tableName = this.tablePrefix + _common.paymentTableName.paymentGatewayKey;
        this.brandTableName = this.tablePrefix + _common.paymentTableName.brand;
        this.brandForeignKeyColumn = _common.paymentTableName.brand + '_id';
    }
};

//# sourceMappingURL=1676277745166-CreatePaymentGatewayKey.js.map