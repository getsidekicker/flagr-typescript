"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
class Segment {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Segment.attributeTypeMap;
    }
}
exports.Segment = Segment;
Segment.discriminator = undefined;
Segment.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "constraints",
        "baseName": "constraints",
        "type": "Array<Constraint>",
        "format": ""
    },
    {
        "name": "distributions",
        "baseName": "distributions",
        "type": "Array<Distribution>",
        "format": ""
    },
    {
        "name": "rank",
        "baseName": "rank",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "rolloutPercent",
        "baseName": "rolloutPercent",
        "type": "number",
        "format": "int64"
    }
];
//# sourceMappingURL=Segment.js.map