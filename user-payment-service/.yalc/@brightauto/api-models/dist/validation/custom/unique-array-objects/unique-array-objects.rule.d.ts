import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
export declare class UniqueArrayObjectsRule implements ValidatorConstraintInterface {
    constructor();
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
