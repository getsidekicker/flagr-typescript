"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
class Variant {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Variant.attributeTypeMap;
    }
}
exports.Variant = Variant;
Variant.discriminator = undefined;
Variant.attributeTypeMap = [
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
        "name": "attachment",
        "baseName": "attachment",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=Variant.js.map