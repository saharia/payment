"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleAction1676286523959 = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("../../../common");
class CreateRoleAction1676286523959 {
    constructor() {
        this.tablePrefix = (process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '');
        this.tableName = this.tablePrefix + common_1.authenticationTableName.roleAction;
        this.roleTableName = this.tablePrefix + common_1.authenticationTableName.role;
        this.actionTableName = this.tablePrefix + common_1.authenticationTableName.action;
        this.roleForeignKeyColumn = common_1.authenticationTableName.role + '_id';
        this.actionForeignKeyColumn = common_1.authenticationTableName.action + '_id';
    }
    async up(queryRunner) {
        console.log("role_actions table migration is running -->", this.tableName);
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: this.roleForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: this.actionForeignKeyColumn,
                    type: "varchar",
                    isNullable: false
                },
            ],
        }), true);
        const table = await queryRunner.getTable(this.tableName);
        queryRunner.clearSqlMemory();
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_role_actions_action_id",
            columnNames: [this.actionForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.actionTableName,
        });
        const roleForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_role_actions_role_id",
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
        console.log("role_actions table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_role_action_action_id",
            columnNames: [this.actionForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.actionTableName,
        });
        const roleForeignKey = new typeorm_1.TableForeignKey({
            name: "FK_role_action_role_id",
            columnNames: [this.roleForeignKeyColumn],
            referencedColumnNames: ["id"],
            referencedTableName: this.roleTableName,
        });
        await queryRunner.dropForeignKeys(table, [userForeignKey, roleForeignKey]);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateRoleAction1676286523959 = CreateRoleAction1676286523959;
//# sourceMappingURL=1676286523959-CreateRoleAction.js.map