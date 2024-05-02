import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreatePaymentGatewayKeyPaymentGatewayPlan1676285368394 implements MigrationInterface {
    tablePrefix: string;
    tableName: string;
    paymentGatewayKeyTableName: string;
    paymentGatewayPlanTableName: string;
    paymentGatewayKeyForeignKeyColumn: string;
    paymentGatewayPlanForeignKeyColumn: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
