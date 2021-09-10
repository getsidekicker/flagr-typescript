"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFlagRequest = void 0;
class CreateFlagRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateFlagRequest.attributeTypeMap;
    }
}
exports.CreateFlagRequest = CreateFlagRequest;
CreateFlagRequest.discriminator = undefined;
CreateFlagRequest.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateFlagRequest.js.map