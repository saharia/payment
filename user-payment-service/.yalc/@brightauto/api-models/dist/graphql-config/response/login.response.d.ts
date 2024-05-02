import { User } from "../../orm-config/entity/authentication/user.entity";
export declare class LoginResponse {
    accessToken: string;
    user: User;
}
