import { EvaluationEntity } from './EvaluationEntity';
export declare class EvaluationBatchRequest {
    'entities': Array<EvaluationEntity>;
    'enableDebug'?: boolean;
    'flagIDs'?: Array<number>;
    'flagKeys'?: Array<string>;
    'flagTags'?: Array<string>;
    'flagTagsOperator'?: EvaluationBatchRequestFlagTagsOperatorEnum;
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
export declare type EvaluationBatchRequestFlagTagsOperatorEnum = "ANY" | "ALL";
