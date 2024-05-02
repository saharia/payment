"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUser1676274268270", {
    enumerable: true,
    get: function() {
        return CreateUser1676274268270;
    }
});
const _typeorm = require("typeorm");
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
const _common = require("../../../common");
let CreateUser1676274268270 = class CreateUser1676274268270 {
    async up(queryRunner) {
        console.log("user table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
            name: this.tableName,
            columns: [
                ..._primarycolumnmigration.primaryColumns,
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "first_name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "last_name",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "profile_picture",
                    type: "varchar",
                    isNullable: true
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
        this.tableName = this.tablePrefix + _common.authenticationTableName.user;
    }
};

//# sourceMappingURL=1676274268270-CreateUser.js.map