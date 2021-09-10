import { Segment } from './Segment';
import { Tag } from './Tag';
import { Variant } from './Variant';
export declare class Flag {
    'id'?: number;
    'key'?: string;
    'description': string;
    'enabled': boolean;
    'tags'?: Array<Tag>;
    'segments'?: Array<Segment>;
    'variants'?: Array<Variant>;
    'dataRecordsEnabled': boolean;
    'entityType'?: string;
    'notes'?: string;
    'createdBy'?: string;
    'updatedBy'?: string;
    'updatedAt'?: Date;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
