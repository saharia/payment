import { PaymentMode } from "../../../../orm-config/entity/enum/payment-mode";
import { PaymentType } from "../../../../orm-config/entity/enum/payment-type";
import { PaypalSubscriptionInput } from "./paypal-subscription.input";
import { RazorpaySubscriptionInput } from "./razorpay-subscription.input";
import { StripeSubscriptionInput } from "./stripe-subscription.input";
export declare class PaymentInput {
    paymentGatewayId: string;
    name: string;
    primaryBrandId: string;
    secondaryBrandId: string;
    paymentMode: PaymentMode;
    paymentType: PaymentType;
    returnUrl: string;
    cancelUrl: string;
    amount: number;
    currency: string;
    token: string;
    paypalSubscription: PaypalSubscriptionInput;
    stripeSubscription: StripeSubscriptionInput;
    razorpaySubscription: RazorpaySubscriptionInput;
}
