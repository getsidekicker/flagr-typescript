"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvalDebugLog = void 0;
class EvalDebugLog {
    constructor() {
    }
    static getAttributeTypeMap() {
        return EvalDebugLog.attributeTypeMap;
    }
}
exports.EvalDebugLog = EvalDebugLog;
EvalDebugLog.discriminator = undefined;
EvalDebugLog.attributeTypeMap = [
    {
        "name": "segmentDebugLogs",
        "baseName": "segmentDebugLogs",
        "type": "Array<SegmentDebugLog>",
        "format": ""
    },
    {
        "name": "msg",
        "baseName": "msg",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=EvalDebugLog.js.map