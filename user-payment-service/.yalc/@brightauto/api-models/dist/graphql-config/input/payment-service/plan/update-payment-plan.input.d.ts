import { CreatePaymentPlanInput } from './create-payment-plan.input';
declare const UpdatePaymentPlanInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePaymentPlanInput>>;
export declare class UpdatePaymentPlanInput extends UpdatePaymentPlanInput_base {
    id: string;
    name: string;
    isActive: boolean;
}
export {};
