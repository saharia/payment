import { BrandType } from '../../../../orm-config/entity/enum/brand-type';
import { PaymentMode } from '../../../../orm-config/entity/enum/payment-mode';
import { UpdatePaymentGatewayKeyInput } from './update-payment-gateway-key-input';
export declare class UpdateBrandInput {
    id: string;
    brandType: BrandType;
    name: string;
    paymentMode: PaymentMode;
    paymentGatewayKeys: UpdatePaymentGatewayKeyInput[];
}
