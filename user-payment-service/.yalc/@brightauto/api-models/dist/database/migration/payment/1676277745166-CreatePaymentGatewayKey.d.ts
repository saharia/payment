import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreatePaymentGatewayKey1676277745166 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    brandTableName: string;
    brandForeignKeyColumn: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
