import { BaseEntityColumn } from "../base.entity";
import { PaymentGatewayKey } from "./payment-gateway-key.entity";
export declare class RazorpayEntity extends BaseEntityColumn {
    orderId: string;
    name: string;
    returnUrl: string;
    cancelUrl: string;
    paymentType: string;
    paymentMode: string;
    paymentGatewayKey: PaymentGatewayKey;
    orderJson: {};
}
