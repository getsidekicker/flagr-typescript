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

export class SegmentDebugLog {
    'segmentID'?: number;
    'msg'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "segmentID",
            "baseName": "segmentID",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SegmentDebugLog.attributeTypeMap;
    }
    
    public constructor() {
    }
}

