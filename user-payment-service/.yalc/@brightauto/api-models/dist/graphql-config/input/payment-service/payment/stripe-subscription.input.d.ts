import { SubscriptionInterval } from "../../../../orm-config/entity/enum/subscription.interval";
export declare class StripeSubscriptionInput {
    interval: SubscriptionInterval;
    intervalCount: number;
    amount: number;
    currency: string;
}
