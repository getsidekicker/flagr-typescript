"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
class Tag {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Tag.attributeTypeMap;
    }
}
exports.Tag = Tag;
Tag.discriminator = undefined;
Tag.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=Tag.js.map