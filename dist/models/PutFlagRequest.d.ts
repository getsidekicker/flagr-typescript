export declare class PutFlagRequest {
    'description'?: string;
    'dataRecordsEnabled'?: boolean;
    'entityType'?: string;
    'enabled'?: boolean;
    'key'?: string;
    'notes'?: string;
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
