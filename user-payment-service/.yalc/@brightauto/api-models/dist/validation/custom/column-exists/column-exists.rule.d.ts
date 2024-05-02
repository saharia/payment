import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { DataSource } from "typeorm";
export declare class ColumnExistsRule implements ValidatorConstraintInterface {
    private dataSource;
    constructor(dataSource: DataSource);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
