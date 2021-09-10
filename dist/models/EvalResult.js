"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvalResult = void 0;
class EvalResult {
    constructor() {
    }
    static getAttributeTypeMap() {
        return EvalResult.attributeTypeMap;
    }
}
exports.EvalResult = EvalResult;
EvalResult.discriminator = undefined;
EvalResult.attributeTypeMap = [
    {
        "name": "flagID",
        "baseName": "flagID",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "flagKey",
        "baseName": "flagKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "flagSnapshotID",
        "baseName": "flagSnapshotID",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "segmentID",
        "baseName": "segmentID",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "variantID",
        "baseName": "variantID",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "variantKey",
        "baseName": "variantKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "variantAttachment",
        "baseName": "variantAttachment",
        "type": "any",
        "format": ""
    },
    {
        "name": "evalContext",
        "baseName": "evalContext",
        "type": "EvalContext",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "string",
        "format": ""
    },
    {
        "name": "evalDebugLog",
        "baseName": "evalDebugLog",
        "type": "EvalDebugLog",
        "format": ""
    }
];
//# sourceMappingURL=EvalResult.js.map