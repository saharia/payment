import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreatePaymentGateway1676277636101 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
