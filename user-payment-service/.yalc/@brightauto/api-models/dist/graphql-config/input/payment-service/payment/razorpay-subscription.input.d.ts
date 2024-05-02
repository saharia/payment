import { SubscriptionInterval } from "../../../../orm-config/entity/enum/subscription.interval";
export declare class RazorpaySubscriptionInput {
    period: SubscriptionInterval;
    interval: number;
    description: string;
    quantity: number;
    totalCount: number;
    customerNotify: boolean;
    amount: number;
    currency: string;
}
