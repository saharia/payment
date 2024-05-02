"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentGateway1676277636101", {
    enumerable: true,
    get: function() {
        return CreatePaymentGateway1676277636101;
    }
});
const _typeorm = require("typeorm");
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
const _common = require("../../../common");
let CreatePaymentGateway1676277636101 = class CreatePaymentGateway1676277636101 {
    async up(queryRunner) {
        console.log("payment gateway table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
            name: this.tableName,
            columns: [
                ..._primarycolumnmigration.primaryColumns,
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
                ..._defaultcolumnmigration.defaultColumns
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
    constructor(){
        this.tablePrefix = process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '';
        this.tableName = this.tablePrefix + _common.paymentTableName.paymentGateway;
    }
};

//# sourceMappingURL=1676277636101-CreatePaymentGateway.js.map