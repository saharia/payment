import { BaseEntityColumn } from "../base.entity";
import { PaymentGatewayPlan } from "./payment-gateway-plan.entity";
export declare class PaymentPlan extends BaseEntityColumn {
    name: string;
    paymentGatewayPlans: PaymentGatewayPlan[];
}
