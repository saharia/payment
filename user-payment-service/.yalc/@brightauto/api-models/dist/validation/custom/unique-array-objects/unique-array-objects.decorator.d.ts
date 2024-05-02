import { ValidationOptions } from 'class-validator';
export declare function IsUniqeArrayObjets<T>(property?: keyof T, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
