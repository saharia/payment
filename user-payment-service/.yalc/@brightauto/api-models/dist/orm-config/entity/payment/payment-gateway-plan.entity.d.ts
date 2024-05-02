import { BaseEntityColumn } from "../base.entity";
import { PaymentGatewayKey } from "./payment-gateway-key.entity";
import { PaymentGateway } from "./payment-gateway.entity";
import { PaymentPlan } from "./payment-plan.entity";
export declare class PaymentGatewayPlan extends BaseEntityColumn {
    percentage: number;
    paymentPlan: PaymentPlan;
    paymentGateway: PaymentGateway;
    paymentGatewayKeys: PaymentGatewayKey[];
}
