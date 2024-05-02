"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRole1676276665154 = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("../../../common");
class CreateUserRole1676276665154 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.authenticationTableName.userRole;
        this.roleTableName = this.tablePrefix + common_1.authenticationTableName.role;
        this.userTableName = this.tablePrefix + common_1.authenticationTableName.user;
        this.roleForeignKeyColumn = common_1.authenticationTableName.role + '_id';
        this.userForeignKeyColumn = common_1.authenticationTableName.user + '_id';
    }
    async up(queryRunner) {
        console.log("user_role table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: this.roleForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: this.userForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
            ],
        }), true);
        const table = await queryRunner.getTable(this.tableName);
        queryRunner.clearSqlMemory();
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_user_role_user_id",
            columnNames: [this.userForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.userTableName,
        });
        const roleForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_user_role_role_id",
            columnNames: [this.roleForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.roleTableName,
        });
        await queryRunner.createForeignKeys(this.tableName, [
            userForeignKey,
            roleForeignKey
        ]);
    }
    async down(queryRunner) {
        console.log("user_role table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_user_role_user_id",
            columnNames: [this.userForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.userTableName,
        });
        const roleForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_user_role_role_id",
            columnNames: [this.roleForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.roleTableName,
        });
        await queryRunner.dropForeignKeys(table, [userForeignKey, roleForeignKey]);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateUserRole1676276665154 = CreateUserRole1676276665154;
//# sourceMappingURL=1676276665154-CreateUserRole.js.map