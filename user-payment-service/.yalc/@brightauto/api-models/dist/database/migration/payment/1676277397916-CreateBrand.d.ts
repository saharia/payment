import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateBrand1676277397916 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    userTableName: string;
    userForeignKeyColumn: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
