"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutVariantRequest = void 0;
class PutVariantRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PutVariantRequest.attributeTypeMap;
    }
}
exports.PutVariantRequest = PutVariantRequest;
PutVariantRequest.discriminator = undefined;
PutVariantRequest.attributeTypeMap = [
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
//# sourceMappingURL=PutVariantRequest.js.map