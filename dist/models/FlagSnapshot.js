"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagSnapshot = void 0;
class FlagSnapshot {
    constructor() {
    }
    static getAttributeTypeMap() {
        return FlagSnapshot.attributeTypeMap;
    }
}
exports.FlagSnapshot = FlagSnapshot;
FlagSnapshot.discriminator = undefined;
FlagSnapshot.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "updatedBy",
        "baseName": "updatedBy",
        "type": "string",
        "format": ""
    },
    {
        "name": "flag",
        "baseName": "flag",
        "type": "Flag",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=FlagSnapshot.js.map