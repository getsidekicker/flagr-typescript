"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationEntity = void 0;
class EvaluationEntity {
    constructor() {
    }
    static getAttributeTypeMap() {
        return EvaluationEntity.attributeTypeMap;
    }
}
exports.EvaluationEntity = EvaluationEntity;
EvaluationEntity.discriminator = undefined;
EvaluationEntity.attributeTypeMap = [
    {
        "name": "entityID",
        "baseName": "entityID",
        "type": "string",
        "format": ""
    },
    {
        "name": "entityType",
        "baseName": "entityType",
        "type": "string",
        "format": ""
    },
    {
        "name": "entityContext",
        "baseName": "entityContext",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=EvaluationEntity.js.map