import { CreateRoleInput } from './create-role.input';
declare const UpdateRoleInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRoleInput>>;
export declare class UpdateRoleInput extends UpdateRoleInput_base {
    id: string;
    name: string;
    actions: string[];
}
export {};
