"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394 = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("../../../common");
class CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.paymentTableName.paymentGatewayKeyPaymentGatewayPlan;
        this.paymentGatewayKeyTableName = this.tablePrefix + common_1.paymentTableName.paymentGatewayKey;
        this.paymentGatewayPlanTableName = this.tablePrefix + common_1.paymentTableName.paymentGatewayPlan;
        this.paymentGatewayKeyForeignKeyColumn = common_1.paymentTableName.paymentGatewayKey + '_id';
        this.paymentGatewayPlanForeignKeyColumn = common_1.paymentTableName.paymentGatewayPlan + '_id';
    }
    async up(queryRunner) {
        console.log("user table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: this.paymentGatewayKeyForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: this.paymentGatewayPlanForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
            ],
        }), true);
        queryRunner.clearSqlMemory();
        const paymentGatewayKeyForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_key",
            columnNames: [this.paymentGatewayKeyForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentGatewayKeyTableName,
        });
        const paymentPlanForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_plan",
            columnNames: [this.paymentGatewayPlanForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentGatewayPlanTableName,
        });
        await queryRunner.createForeignKeys(this.tableName, [
            paymentGatewayKeyForeignKey,
            paymentPlanForeignKey
        ]);
    }
    async down(queryRunner) {
        const paymentGatewayKeyForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_key",
            columnNames: [this.paymentGatewayKeyForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentGatewayKeyTableName,
        });
        const paymentPlanForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_plan",
            columnNames: [this.paymentGatewayPlanForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.paymentGatewayPlanTableName,
        });
        await queryRunner.dropForeignKeys(this.tableName, [
            paymentGatewayKeyForeignKey,
            paymentPlanForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394 = CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394;
//# sourceMappingURL=1676285368394-CreatePaymentGatewayKeyPaymentGatewayPlan.js.map