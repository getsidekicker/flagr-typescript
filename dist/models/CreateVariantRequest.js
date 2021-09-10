"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVariantRequest = void 0;
class CreateVariantRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateVariantRequest.attributeTypeMap;
    }
}
exports.CreateVariantRequest = CreateVariantRequest;
CreateVariantRequest.discriminator = undefined;
CreateVariantRequest.attributeTypeMap = [
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
//# sourceMappingURL=CreateVariantRequest.js.map