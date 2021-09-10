export declare class Constraint {
    'id'?: number;
    'property': string;
    'operator': ConstraintOperatorEnum;
    'value': string;
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
export declare type ConstraintOperatorEnum = "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "EREG" | "NEREG" | "IN" | "NOTIN" | "CONTAINS" | "NOTCONTAINS";
