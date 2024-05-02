import { BaseEntityColumn } from "../base.entity";
import { Brand } from "./brand.entity";
import { PaymentGatewayPlan } from "./payment-gateway-plan.entity";
import { PaymentGateway } from "./payment-gateway.entity";
import { Paypal } from "./paypal.entity";
export declare class PaymentGatewayKey extends BaseEntityColumn {
    clientId: string;
    clientSecret: string;
    paymentGateway: PaymentGateway;
    brand: Brand;
    paymentGatewayPlans: PaymentGatewayPlan[];
    paypals: Paypal[];
}
