"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelError = void 0;
class ModelError {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}
exports.ModelError = ModelError;
ModelError.discriminator = undefined;
ModelError.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ModelError.js.map