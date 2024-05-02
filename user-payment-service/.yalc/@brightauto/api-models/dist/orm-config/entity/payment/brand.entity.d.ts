import { User } from "../authentication/user.entity";
import { BaseEntityColumn } from "../base.entity";
import { PaymentMode } from "../enum/payment-mode";
import { BrandType } from "../enum/brand-type";
import { PaymentGatewayKey } from "./payment-gateway-key.entity";
export declare class Brand extends BaseEntityColumn {
    brandType: BrandType;
    name: string;
    paymentMode: PaymentMode;
    paymentGatewayKeys: PaymentGatewayKey[];
    user: User;
    apiKey: string;
    createApiKey(): Promise<void>;
}
