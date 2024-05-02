import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class MicroServiceExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): import("rxjs").Observable<never>;
}
