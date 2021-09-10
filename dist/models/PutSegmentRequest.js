"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSegmentRequest = void 0;
class PutSegmentRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PutSegmentRequest.attributeTypeMap;
    }
}
exports.PutSegmentRequest = PutSegmentRequest;
PutSegmentRequest.discriminator = undefined;
PutSegmentRequest.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "rolloutPercent",
        "baseName": "rolloutPercent",
        "type": "number",
        "format": "int64"
    }
];
//# sourceMappingURL=PutSegmentRequest.js.map