import { Flag } from './Flag';
export declare class FlagSnapshot {
    'id': number;
    'updatedBy'?: string;
    'flag': Flag;
    'updatedAt': string;
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
