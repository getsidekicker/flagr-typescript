"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentRequest = void 0;
class CreateSegmentRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateSegmentRequest.attributeTypeMap;
    }
}
exports.CreateSegmentRequest = CreateSegmentRequest;
CreateSegmentRequest.discriminator = undefined;
CreateSegmentRequest.attributeTypeMap = [
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
//# sourceMappingURL=CreateSegmentRequest.js.map