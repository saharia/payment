import { PaginateQuery } from "nestjs-paginate";
export declare class PaginationInput implements PaginateQuery {
    path: string;
    page: number;
    limit: number;
    sortBy: [string, string][];
}
