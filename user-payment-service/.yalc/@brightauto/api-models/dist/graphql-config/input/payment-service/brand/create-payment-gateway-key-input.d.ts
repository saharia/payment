import { CreateBrandPaymentGatewayInput } from "./create-brand-payment-gateway-input";
import { CreateBrandPaymentGatewayPlanInput } from "./create-brand-payment-gateway-plan-input";
export declare class CreatePaymentGatewayKeyInput {
    paymentGateway: CreateBrandPaymentGatewayInput;
    clientId: string;
    clientSecret: string;
    paymentGatewayPlans: CreateBrandPaymentGatewayPlanInput[];
}
