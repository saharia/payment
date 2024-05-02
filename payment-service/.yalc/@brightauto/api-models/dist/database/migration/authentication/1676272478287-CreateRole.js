"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateRole1676272478287", {
    enumerable: true,
    get: function() {
        return CreateRole1676272478287;
    }
});
const _common = require("../../../common");
const _typeorm = require("typeorm");
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
let CreateRole1676272478287 = class CreateRole1676272478287 {
    async up(queryRunner) {
        console.log("role table migration is running -->", this.tableName);
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
        this.tableName = this.tablePrefix + _common.authenticationTableName.role;
    }
};

//# sourceMappingURL=1676272478287-CreateRole.js.map