"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentGatewayPlan1676277720000 = void 0;
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
const typeorm_1 = require("typeorm");
const common_1 = require("../../../common");
class CreatePaymentGatewayPlan1676277720000 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.paymentTableName.paymentGatewayPlan;
        this.paymentGatewayTableName = this.tablePrefix + common_1.paymentTableName.paymentGateway;
        this.paymentPlanTableName = this.tablePrefix + common_1.paymentTableName.paymentPlan;
        this.paymentGatewayForeignKeyColumn = common_1.paymentTableName.paymentGateway + '_id';
        this.paymentPlanForeignKeycolumn = common_1.paymentTableName.paymentPlan + '_id';
    }
    async up(queryRunner) {
        console.log("payment gateway plan table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                ...primary_column_migration_1.primaryColumns,
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
                ...default_column_migration_1.defaultColumns
            ],
        }), true);
        queryRunner.clearSqlMemory();
        const paymentGatewayForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_gateway",
            columnNames: [this.paymentGatewayForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentGatewayTableName,
        });
        const paymentPlanForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_plan",
            columnNames: [this.paymentPlanForeignKeycolumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentPlanTableName,
        });
        await queryRunner.createForeignKeys(this.tableName, [
            paymentGatewayForeignKey,
            paymentPlanForeignKey
        ]);
    }
    async down(queryRunner) {
        const paymentGatewayForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_gateway",
            columnNames: [this.paymentGatewayForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentGatewayTableName,
        });
        const paymentPlanForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_plan_payment_plan",
            columnNames: [this.paymentPlanForeignKeycolumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentPlanTableName,
        });
        await queryRunner.dropForeignKeys(this.tableName, [
            paymentGatewayForeignKey,
            paymentPlanForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreatePaymentGatewayPlan1676277720000 = CreatePaymentGatewayPlan1676277720000;
//# sourceMappingURL=1676277720000-CreatePaymentGatewayPlan.js.map