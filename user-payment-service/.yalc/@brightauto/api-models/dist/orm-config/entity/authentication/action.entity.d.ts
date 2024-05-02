import { BaseEntityColumn } from "../base.entity";
import { Role } from "./role.entity";
export declare class Action extends BaseEntityColumn {
    name: string;
    roles: Role[];
}
