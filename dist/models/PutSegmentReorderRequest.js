"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSegmentReorderRequest = void 0;
class PutSegmentReorderRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PutSegmentReorderRequest.attributeTypeMap;
    }
}
exports.PutSegmentReorderRequest = PutSegmentReorderRequest;
PutSegmentReorderRequest.discriminator = undefined;
PutSegmentReorderRequest.attributeTypeMap = [
    {
        "name": "segmentIDs",
        "baseName": "segmentIDs",
        "type": "Array<number>",
        "format": "int64"
    }
];
//# sourceMappingURL=PutSegmentReorderRequest.js.map