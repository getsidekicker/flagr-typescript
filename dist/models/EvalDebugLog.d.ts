import { SegmentDebugLog } from './SegmentDebugLog';
export declare class EvalDebugLog {
    'segmentDebugLogs'?: Array<SegmentDebugLog>;
    'msg'?: string;
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
