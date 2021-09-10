"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConstraintRequest = void 0;
class CreateConstraintRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateConstraintRequest.attributeTypeMap;
    }
}
exports.CreateConstraintRequest = CreateConstraintRequest;
CreateConstraintRequest.discriminator = undefined;
CreateConstraintRequest.attributeTypeMap = [
    {
        "name": "property",
        "baseName": "property",
        "type": "string",
        "format": ""
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "string",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateConstraintRequest.js.map