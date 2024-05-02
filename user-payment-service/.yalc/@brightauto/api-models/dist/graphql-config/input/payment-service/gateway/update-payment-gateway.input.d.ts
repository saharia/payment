import { PaymentGatewayPlanInput } from '../gateway-plan/payment-gateway-plan.input';
import { CreatePaymentGatewayInput } from './create-payment-gateway.input';
declare const UpdatePaymentGatewayInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePaymentGatewayInput>>;
export declare class UpdatePaymentGatewayInput extends UpdatePaymentGatewayInput_base {
    id: string;
    name: string;
    apiSandboxTokenUrl: string;
    apiSandboxPaymentUrl: string;
    apiTokenUrl: string;
    apiPaymentUrl: string;
    paymentGatewayPlans: PaymentGatewayPlanInput[];
}
export {};
