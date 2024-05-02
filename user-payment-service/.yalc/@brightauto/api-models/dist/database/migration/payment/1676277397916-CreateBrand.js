"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBrand1676277397916 = void 0;
const lodash_1 = require("lodash");
const common_1 = require("../../../common");
const typeorm_1 = require("typeorm");
const orm_config_1 = require("../../../orm-config");
const default_column_migration_1 = require("../../default-column.migration");
const primary_column_migration_1 = require("../../primary-column.migration");
class CreateBrand1676277397916 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.paymentTableName.brand;
        this.userTableName = this.tablePrefix + common_1.authenticationTableName.user;
        this.userForeignKeyColumn = common_1.authenticationTableName.user + '_id';
    }
    async up(queryRunner) {
        console.log("brand table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                ...primary_column_migration_1.primaryColumns,
                {
                    name: "brand_type",
                    type: "enum",
                    enum: (0, lodash_1.values)(orm_config_1.BrandType),
                    default: `'${orm_config_1.BrandType.WEBSITE}'`,
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
                    enum: (0, lodash_1.values)(orm_config_1.PaymentMode),
                    default: `'${orm_config_1.PaymentMode.SANDBOX}'`,
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
                ...default_column_migration_1.defaultColumns
            ],
        }), true);
        queryRunner.clearSqlMemory();
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_brand_user_id",
            columnNames: [this.userForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.userTableName,
        });
        await queryRunner.createForeignKeys(this.tableName, [
            userForeignKey,
        ]);
    }
    async down(queryRunner) {
        console.log("brand table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_brand_user_id",
            columnNames: [this.userForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.userTableName,
        });
        await queryRunner.dropForeignKeys(table, [userForeignKey]);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateBrand1676277397916 = CreateBrand1676277397916;
//# sourceMappingURL=1676277397916-CreateBrand.js.map