"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distribution = void 0;
class Distribution {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Distribution.attributeTypeMap;
    }
}
exports.Distribution = Distribution;
Distribution.discriminator = undefined;
Distribution.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "percent",
        "baseName": "percent",
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
        "name": "variantID",
        "baseName": "variantID",
        "type": "number",
        "format": "int64"
    }
];
//# sourceMappingURL=Distribution.js.map