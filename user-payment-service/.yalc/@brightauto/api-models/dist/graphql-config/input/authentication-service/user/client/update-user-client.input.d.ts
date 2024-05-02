import { CreateUserClientInput } from './create-user-client.input';
declare const UpdateUserClientInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserClientInput>>;
export declare class UpdateUserClientInput extends UpdateUserClientInput_base {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    profilePicture: string;
}
export {};
