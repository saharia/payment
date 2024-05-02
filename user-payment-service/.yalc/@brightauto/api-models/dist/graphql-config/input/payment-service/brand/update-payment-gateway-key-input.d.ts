import { UpdateBrandPaymentGatewayInput } from "./update-brand-payment-gateway-input";
import { UpdateBrandPaymentGatewayPlanInput } from "./update-brand-payment-gateway-plan-input";
export declare class UpdatePaymentGatewayKeyInput {
    id: string;
    paymentGateway: UpdateBrandPaymentGatewayInput;
    clientId: string;
    clientSecret: string;
    paymentGatewayPlans: UpdateBrandPaymentGatewayPlanInput[];
}
