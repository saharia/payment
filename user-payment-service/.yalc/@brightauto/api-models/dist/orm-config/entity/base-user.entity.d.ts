import { User } from "./authentication/user.entity";
export declare class BaseUserEntityColumn {
    id: string;
    isPublished: boolean;
    isActive: boolean;
    createdBy: User;
    updatedBy: User;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
