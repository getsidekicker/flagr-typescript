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

export class EvaluationEntity {
    'entityID'?: string;
    'entityType'?: string;
    'entityContext'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entityID",
            "baseName": "entityID",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityContext",
            "baseName": "entityContext",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EvaluationEntity.attributeTypeMap;
    }
    
    public constructor() {
    }
}

