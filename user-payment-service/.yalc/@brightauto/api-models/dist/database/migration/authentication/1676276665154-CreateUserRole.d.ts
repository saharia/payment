import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserRole1676276665154 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    roleTableName: string;
    userTableName: string;
    roleForeignKeyColumn: string;
    userForeignKeyColumn: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
