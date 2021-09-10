export declare class EvalContext {
    'entityID'?: string;
    'entityType'?: string;
    'entityContext'?: any;
    'enableDebug'?: boolean;
    'flagID'?: number;
    'flagKey'?: string;
    'flagTags'?: Array<string>;
    'flagTagsOperator'?: EvalContextFlagTagsOperatorEnum;
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
export declare type EvalContextFlagTagsOperatorEnum = "ANY" | "ALL";
