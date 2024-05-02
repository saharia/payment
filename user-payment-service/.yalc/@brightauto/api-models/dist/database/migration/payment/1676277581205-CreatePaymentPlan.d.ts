import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreatePaymentPlan1676277581205 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
