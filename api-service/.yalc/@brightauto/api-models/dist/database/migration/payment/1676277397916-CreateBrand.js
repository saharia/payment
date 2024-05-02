"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateBrand1676277397916", {
    enumerable: true,
    get: function() {
        return CreateBrand1676277397916;
    }
});
const _lodash = require("lodash");
const _common = require("../../../common");
const _typeorm = require("typeorm");
const _ormconfig = require("../../../orm-config");
const _defaultcolumnmigration = require("../../default-column.migration");
const _primarycolumnmigration = require("../../primary-column.migration");
let CreateBrand1676277397916 = class CreateBrand1676277397916 {
    async up(queryRunner) {
        console.log("brand table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
            name: this.tableName,
            columns: [
                ..._primarycolumnmigration.primaryColumns,
                {
                    name: "brand_type",
                    type: "enum",
                    enum: (0, _lodash.values)(_ormconfig.BrandType),
                    default: `'${_ormconfig.BrandType.WEBSITE}'`,
                    isNullable: false
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "payment_mode",
                    type: "enum",
                    enum: (0, _lodash.values)(_ormconfig.PaymentMode),
                    default: `'${_ormconfig.PaymentMode.SANDBOX}'`,
                    isNullable: false
                },
                {
                    name: "api_key",
                    type: "text",
                    isNullable: false
                },
                {
                    name: this.userForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
                ..._defaultcolumnmigration.defaultColumns
            ]
        }), true);
        // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_brand_user_id",
            columnNames: [
                this.userForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.userTableName
        });
        await queryRunner.createForeignKeys(this.tableName, [
            userForeignKey
        ]);
    }
    async down(queryRunner) {
        console.log("brand table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_brand_user_id",
            columnNames: [
                this.userForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.userTableName
        });
        await queryRunner.dropForeignKeys(table, [
            userForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
    constructor(){
        this.tablePrefix = process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '';
        this.tableName = this.tablePrefix + _common.paymentTableName.brand;
        this.userTableName = this.tablePrefix + _common.authenticationTableName.user;
        this.userForeignKeyColumn = _common.authenticationTableName.user + '_id';
    }
};

//# sourceMappingURL=1676277397916-CreateBrand.js.map