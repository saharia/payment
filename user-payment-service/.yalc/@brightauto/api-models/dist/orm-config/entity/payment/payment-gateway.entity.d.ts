import { BaseEntityColumn } from "../base.entity";
import { PaymentGatewayKey } from "./payment-gateway-key.entity";
import { PaymentGatewayPlan } from "./payment-gateway-plan.entity";
export declare class PaymentGateway extends BaseEntityColumn {
    name: string;
    apiSandboxTokenUrl: string;
    apiSandboxPaymentUrl: string;
    apiTokenUrl: string;
    apiPaymentUrl: string;
    paymentGatewayKeys: PaymentGatewayKey[];
    paymentGatewayPlans: PaymentGatewayPlan[];
}
