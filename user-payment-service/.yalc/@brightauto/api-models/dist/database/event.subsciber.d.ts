import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
export declare class EntityAllSubscriber implements EntitySubscriberInterface {
    constructor(dataSource: DataSource);
    beforeInsert(event: InsertEvent<any>): void;
}
