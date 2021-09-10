import { EvalContext } from './EvalContext';
import { EvalDebugLog } from './EvalDebugLog';
export declare class EvalResult {
    'flagID'?: number;
    'flagKey'?: string;
    'flagSnapshotID'?: number;
    'segmentID'?: number;
    'variantID'?: number;
    'variantKey'?: string;
    'variantAttachment'?: any;
    'evalContext'?: EvalContext;
    'timestamp'?: string;
    'evalDebugLog'?: EvalDebugLog;
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
