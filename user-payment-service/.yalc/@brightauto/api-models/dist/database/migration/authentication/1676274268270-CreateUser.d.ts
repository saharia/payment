import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUser1676274268270 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
