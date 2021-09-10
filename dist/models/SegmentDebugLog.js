"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentDebugLog = void 0;
class SegmentDebugLog {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SegmentDebugLog.attributeTypeMap;
    }
}
exports.SegmentDebugLog = SegmentDebugLog;
SegmentDebugLog.discriminator = undefined;
SegmentDebugLog.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=SegmentDebugLog.js.map