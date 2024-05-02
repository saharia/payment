"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentGatewayPlan1676277720000", {
    enumerable: true,
    get: function() {
        return CreatePaymentGatewayPlan1676277720000;
    }
});
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
const _typeorm = require("typeorm");
const _common = require("../../../common");
let CreatePaymentGatewayPlan1676277720000 = class CreatePaymentGatewayPlan1676277720000 {
    async up(queryRunner) {
        console.log("payment gateway plan table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
            name: this.tableName,
            columns: [
                ..._primarycolumnmigration.primaryColumns,
                {
                    name: "percentage",
                    type: "integer",
                    isNullable: false,
                    default: 0
                },
                {
                    name: this.paymentGatewayForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: this.paymentPlanForeignKeycolumn,
                    type: "varchar",
                    isNullable: false
                },
                ..._defaultcolumnmigration.defaultColumns
            ]
        }), true);
        // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();
        const paymentGatewayForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_gateway",
            columnNames: [
                this.paymentGatewayForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentGatewayTableName
        });
        const paymentPlanForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_plan",
            columnNames: [
                this.paymentPlanForeignKeycolumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentPlanTableName
        });
        await queryRunner.createForeignKeys(this.tableName, [
            paymentGatewayForeignKey,
            paymentPlanForeignKey
        ]);
    }
    async down(queryRunner) {
        const paymentGatewayForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_gateway",
            columnNames: [
                this.paymentGatewayForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentGatewayTableName
        });
        const paymentPlanForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_plan",
            columnNames: [
                this.paymentPlanForeignKeycolumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentPlanTableName
        });
        await queryRunner.dropForeignKeys(this.tableName, [
            paymentGatewayForeignKey,
            paymentPlanForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
    constructor(){
        this.tablePrefix = process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '';
        this.tableName = this.tablePrefix + _common.paymentTableName.paymentGatewayPlan;
        this.paymentGatewayTableName = this.tablePrefix + _common.paymentTableName.paymentGateway;
        this.paymentPlanTableName = this.tablePrefix + _common.paymentTableName.paymentPlan;
        this.paymentGatewayForeignKeyColumn = _common.paymentTableName.paymentGateway + '_id';
        this.paymentPlanForeignKeycolumn = _common.paymentTableName.paymentPlan + '_id';
    }
};

//# sourceMappingURL=1676277720000-CreatePaymentGatewayPlan.js.map