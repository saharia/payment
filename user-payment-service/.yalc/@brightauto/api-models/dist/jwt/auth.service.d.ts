import { User } from "../orm-config/entity";
import { FindUserInput } from "../graphql-config";
export declare class JWTAuthService {
    private readonly user;
    validateUser(email: string, pass: string): Promise<any>;
    findOne(findUserInput: FindUserInput): Promise<User>;
}
