import { Type } from '@nestjs/common';
import { PaginateMeta } from './paginate.meta';
export interface IPaginatedType<T> {
    data: T[];
    meta: PaginateMeta;
}
export declare function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>>;
