import { ValidationOptions } from 'class-validator';
export declare function Match<T>(property: keyof T, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
