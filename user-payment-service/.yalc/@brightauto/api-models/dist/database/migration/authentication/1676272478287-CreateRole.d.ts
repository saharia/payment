import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateRole1676272478287 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
