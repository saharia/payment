import { CreateUserAdminInput } from './create-user-admin.input';
declare const UpdateUserAdminInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserAdminInput>>;
export declare class UpdateUserAdminInput extends UpdateUserAdminInput_base {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    profilePicture: string;
}
export {};
