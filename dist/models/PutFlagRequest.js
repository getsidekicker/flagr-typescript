"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutFlagRequest = void 0;
class PutFlagRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PutFlagRequest.attributeTypeMap;
    }
}
exports.PutFlagRequest = PutFlagRequest;
PutFlagRequest.discriminator = undefined;
PutFlagRequest.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "dataRecordsEnabled",
        "baseName": "dataRecordsEnabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "entityType",
        "baseName": "entityType",
        "type": "string",
        "format": ""
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PutFlagRequest.js.map