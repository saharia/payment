import { BaseEntityColumn } from "../base.entity";
import { Brand } from "../payment/brand.entity";
import { Role } from "./role.entity";
export declare class User extends BaseEntityColumn {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    roles: Role[];
    brands: Brand[];
    hashPassword(): Promise<void>;
}
