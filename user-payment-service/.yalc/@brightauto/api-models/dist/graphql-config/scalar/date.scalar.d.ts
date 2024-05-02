import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class DateScalar implements CustomScalar<Date, Date> {
    description: string;
    parseValue(value: number): Date;
    serialize(value: Date): Date;
    parseLiteral(ast: ValueNode): Date;
}
