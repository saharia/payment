"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394", {
    enumerable: true,
    get: function() {
        return CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394;
    }
});
const _typeorm = require("typeorm");
const _common = require("../../../common");
let CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394 = class CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394 {
    async up(queryRunner) {
        console.log("user table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
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
                }
            ]
        }), true);
        // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();
        const paymentGatewayKeyForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_key",
            columnNames: [
                this.paymentGatewayKeyForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentGatewayKeyTableName
        });
        const paymentPlanForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_plan",
            columnNames: [
                this.paymentGatewayPlanForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentGatewayPlanTableName
        });
        await queryRunner.createForeignKeys(this.tableName, [
            paymentGatewayKeyForeignKey,
            paymentPlanForeignKey
        ]);
    }
    async down(queryRunner) {
        const paymentGatewayKeyForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_key",
            columnNames: [
                this.paymentGatewayKeyForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentGatewayKeyTableName
        });
        const paymentPlanForeignKey = new _typeorm.TableForeignKey({
            name: "FK_payment_gateway_key_payment_gateway_plan_payment_gateway_plan",
            columnNames: [
                this.paymentGatewayPlanForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.paymentGatewayPlanTableName
        });
        await queryRunner.dropForeignKeys(this.tableName, [
            paymentGatewayKeyForeignKey,
            paymentPlanForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
    constructor(){
        this.tablePrefix = process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '';
        this.tableName = this.tablePrefix + _common.paymentTableName.paymentGatewayKeyPaymentGatewayPlan;
        this.paymentGatewayKeyTableName = this.tablePrefix + _common.paymentTableName.paymentGatewayKey;
        this.paymentGatewayPlanTableName = this.tablePrefix + _common.paymentTableName.paymentGatewayPlan;
        this.paymentGatewayKeyForeignKeyColumn = _common.paymentTableName.paymentGatewayKey + '_id';
        this.paymentGatewayPlanForeignKeyColumn = _common.paymentTableName.paymentGatewayPlan + '_id';
    }
};

//# sourceMappingURL=1676285368394-CreatePaymentGatewayKeyPaymentGatewayPlan.js.map