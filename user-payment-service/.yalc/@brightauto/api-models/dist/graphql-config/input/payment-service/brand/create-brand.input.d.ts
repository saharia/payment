import { BrandType } from "../../../../orm-config/entity/enum/brand-type";
import { PaymentMode } from "../../../../orm-config/entity/enum/payment-mode";
import { CreatePaymentGatewayKeyInput } from "./create-payment-gateway-key-input";
export declare class CreateBrandInput {
    brandType: BrandType;
    name: string;
    paymentMode: PaymentMode;
    paymentGatewayKeys: CreatePaymentGatewayKeyInput[];
}
