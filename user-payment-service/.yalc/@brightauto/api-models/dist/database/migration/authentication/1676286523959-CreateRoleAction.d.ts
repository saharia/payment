import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateRoleAction1676286523959 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    roleTableName: string;
    actionTableName: string;
    roleForeignKeyColumn: string;
    actionForeignKeyColumn: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
