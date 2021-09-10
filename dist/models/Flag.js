"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = void 0;
class Flag {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Flag.attributeTypeMap;
    }
}
exports.Flag = Flag;
Flag.discriminator = undefined;
Flag.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
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
        "name": "tags",
        "baseName": "tags",
        "type": "Array<Tag>",
        "format": ""
    },
    {
        "name": "segments",
        "baseName": "segments",
        "type": "Array<Segment>",
        "format": ""
    },
    {
        "name": "variants",
        "baseName": "variants",
        "type": "Array<Variant>",
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
        "name": "notes",
        "baseName": "notes",
        "type": "string",
        "format": ""
    },
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedBy",
        "baseName": "updatedBy",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
];
//# sourceMappingURL=Flag.js.map