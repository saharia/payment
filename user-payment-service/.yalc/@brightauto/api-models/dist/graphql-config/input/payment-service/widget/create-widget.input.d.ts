import { PaymentMode } from "../../../../orm-config/entity/enum/payment-mode";
import { PaymentType } from "../../../../orm-config/entity/enum/payment-type";
import { PaypalSubscriptionInput } from "../payment/paypal-subscription.input";
import { RazorpaySubscriptionInput } from "../payment/razorpay-subscription.input";
import { StripeSubscriptionInput } from "../payment/stripe-subscription.input";
export declare class CreateWidgetInput {
    companyName: string;
    paymentMode: PaymentMode;
    paymentType: PaymentType;
    planName: string;
    paymentGatewayIds: string[];
    paypalSubscription: PaypalSubscriptionInput;
    stripeSubscription: StripeSubscriptionInput;
    razorpaySubscription: RazorpaySubscriptionInput;
}
