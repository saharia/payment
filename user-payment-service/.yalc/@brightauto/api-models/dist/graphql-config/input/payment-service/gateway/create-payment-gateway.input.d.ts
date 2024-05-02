import { PaymentGatewayPlanInput } from "../gateway-plan/payment-gateway-plan.input";
export declare class CreatePaymentGatewayInput {
    name: string;
    apiSandboxTokenUrl: string;
    apiSandboxPaymentUrl: string;
    apiTokenUrl: string;
    apiPaymentUrl: string;
    paymentGatewayPlans: PaymentGatewayPlanInput[];
}
