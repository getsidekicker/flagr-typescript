import { Constraint } from './Constraint';
import { Distribution } from './Distribution';
export declare class Segment {
    'id'?: number;
    'description': string;
    'constraints'?: Array<Constraint>;
    'distributions'?: Array<Distribution>;
    'rank': number;
    'rolloutPercent': number;
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
