import { PaypalSetupFeeFailureAction } from "../../../../../orm-config/entity/enum/paypal.setup-failure-action";
import { PaypalSetupFee } from "./paypal-setup-fee";
export declare class PaypalPaymentPreferences {
    autoBillOutstanding: boolean;
    setupFee: PaypalSetupFee;
    setupFeeFailureAction: PaypalSetupFeeFailureAction;
    paymentFailureThreshold: number;
}
