import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { DataSource } from "typeorm";
export declare class BrandGatewayExistsRule implements ValidatorConstraintInterface {
    private dataSource;
    constructor(dataSource: DataSource);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
