"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateRoleAction1676286523959", {
    enumerable: true,
    get: function() {
        return CreateRoleAction1676286523959;
    }
});
const _typeorm = require("typeorm");
const _common = require("../../../common");
let CreateRoleAction1676286523959 = class CreateRoleAction1676286523959 {
    async up(queryRunner) {
        console.log("role_actions table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
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
                }
            ]
        }), true);
        const table = await queryRunner.getTable(this.tableName);
        // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_role_actions_action_id",
            columnNames: [
                this.actionForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.actionTableName
        });
        const roleForeignKey = new _typeorm.TableForeignKey({
            name: "FK_role_actions_role_id",
            columnNames: [
                this.roleForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.roleTableName
        });
        await queryRunner.createForeignKeys(this.tableName, [
            userForeignKey,
            roleForeignKey
        ]);
    }
    async down(queryRunner) {
        console.log("role_actions table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_role_action_action_id",
            columnNames: [
                this.actionForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.actionTableName
        });
        const roleForeignKey = new _typeorm.TableForeignKey({
            name: "FK_role_action_role_id",
            columnNames: [
                this.roleForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.roleTableName
        });
        await queryRunner.dropForeignKeys(table, [
            userForeignKey,
            roleForeignKey
        ]);
        await queryRunner.dropTable(this.tableName);
    }
    constructor(){
        this.tablePrefix = process.env.TABLE_PREFIX ? process.env.TABLE_PREFIX : '';
        this.tableName = this.tablePrefix + _common.authenticationTableName.roleAction;
        this.roleTableName = this.tablePrefix + _common.authenticationTableName.role;
        this.actionTableName = this.tablePrefix + _common.authenticationTableName.action;
        this.roleForeignKeyColumn = _common.authenticationTableName.role + '_id';
        this.actionForeignKeyColumn = _common.authenticationTableName.action + '_id';
    }
};

//# sourceMappingURL=1676286523959-CreateRoleAction.js.map