import { CreateActionInput } from './create-action.input';
declare const UpdateActionInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreateActionInput>>;
export declare class UpdateActionInput extends UpdateActionInput_base {
    id: string;
    name: string;
    roleIds: string[];
}
export {};
