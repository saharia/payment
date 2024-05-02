"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePaymentPlan1676277581205", {
    enumerable: true,
    get: function() {
        return CreatePaymentPlan1676277581205;
    }
});
const _typeorm = require("typeorm");
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
const _common = require("../../../common");
let CreatePaymentPlan1676277581205 = class CreatePaymentPlan1676277581205 {
    async up(queryRunner) {
        console.log("payment plan table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
            name: this.tableName,
            columns: [
                ..._primarycolumnmigration.primaryColumns,
                {
                    name: "name",
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
        this.tableName = this.tablePrefix + _common.paymentTableName.paymentPlan;
    }
};

//# sourceMappingURL=1676277581205-CreatePaymentPlan.js.map