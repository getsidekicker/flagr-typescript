/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Constraint {
    'id'?: number;
    'property': string;
    'operator': ConstraintOperatorEnum;
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "property",
            "baseName": "property",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "ConstraintOperatorEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Constraint.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ConstraintOperatorEnum = "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "EREG" | "NEREG" | "IN" | "NOTIN" | "CONTAINS" | "NOTCONTAINS" ;

