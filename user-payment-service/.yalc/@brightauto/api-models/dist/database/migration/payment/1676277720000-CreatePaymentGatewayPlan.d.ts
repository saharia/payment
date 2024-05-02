import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreatePaymentGatewayPlan1676277720000 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    paymentGatewayTableName: string;
    paymentPlanTableName: string;
    paymentGatewayForeignKeyColumn: string;
    paymentPlanForeignKeycolumn: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
