"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUserRole1676276665154", {
    enumerable: true,
    get: function() {
        return CreateUserRole1676276665154;
    }
});
const _typeorm = require("typeorm");
const _common = require("../../../common");
let CreateUserRole1676276665154 = class CreateUserRole1676276665154 {
    async up(queryRunner) {
        console.log("user_role table migration is running -->", this.tableName);
        await queryRunner.createTable(new _typeorm.Table({
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
                }
            ]
        }), true);
        const table = await queryRunner.getTable(this.tableName);
        // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_user_role_user_id",
            columnNames: [
                this.userForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.userTableName
        });
        const roleForeignKey = new _typeorm.TableForeignKey({
            name: "FK_user_role_role_id",
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
        console.log("user_role table down migration is running -->");
        const table = await queryRunner.getTable(this.tableName);
        const userForeignKey = new _typeorm.TableForeignKey({
            name: "FK_user_role_user_id",
            columnNames: [
                this.userForeignKeyColumn
            ],
            referencedColumnNames: [
                "id"
            ],
            referencedTableName: this.userTableName
        });
        const roleForeignKey = new _typeorm.TableForeignKey({
            name: "FK_user_role_role_id",
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
        this.tableName = this.tablePrefix + _common.authenticationTableName.userRole;
        this.roleTableName = this.tablePrefix + _common.authenticationTableName.role;
        this.userTableName = this.tablePrefix + _common.authenticationTableName.user;
        this.roleForeignKeyColumn = _common.authenticationTableName.role + '_id';
        this.userForeignKeyColumn = _common.authenticationTableName.user + '_id';
    }
};

//# sourceMappingURL=1676276665154-CreateUserRole.js.map