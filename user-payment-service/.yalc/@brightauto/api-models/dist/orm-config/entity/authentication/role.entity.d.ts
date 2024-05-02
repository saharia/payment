import { BaseEntityColumn } from "../base.entity";
import { Action } from "./action.entity";
import { User } from "./user.entity";
export declare class Role extends BaseEntityColumn {
    name: string;
    users: User[];
    actions: Action[];
}
