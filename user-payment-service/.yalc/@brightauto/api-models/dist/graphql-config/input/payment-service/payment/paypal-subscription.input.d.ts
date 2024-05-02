import { PaypalProductType } from "../../../../orm-config/entity/enum/paypal.product.type";
import { PaypalBillingCycles } from "./paypal/paypal-billing-cycles";
import { PaypalPaymentPreferences } from "./paypal/paypal-payment-preferences";
import { PaypalSubscriptionTaxes } from "./paypal/paypal-subscription-taxes";
export declare class PaypalSubscriptionInput {
    type: PaypalProductType;
    description: string;
    billingCycles: PaypalBillingCycles;
    paymentPreferences: PaypalPaymentPreferences;
    taxes: PaypalSubscriptionTaxes;
}
