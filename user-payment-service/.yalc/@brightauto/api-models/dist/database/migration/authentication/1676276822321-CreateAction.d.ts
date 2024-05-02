import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateAction1676276822321 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
