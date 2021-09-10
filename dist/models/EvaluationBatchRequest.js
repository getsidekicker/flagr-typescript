"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationBatchRequest = void 0;
class EvaluationBatchRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return EvaluationBatchRequest.attributeTypeMap;
    }
}
exports.EvaluationBatchRequest = EvaluationBatchRequest;
EvaluationBatchRequest.discriminator = undefined;
EvaluationBatchRequest.attributeTypeMap = [
    {
        "name": "entities",
        "baseName": "entities",
        "type": "Array<EvaluationEntity>",
        "format": ""
    },
    {
        "name": "enableDebug",
        "baseName": "enableDebug",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "flagIDs",
        "baseName": "flagIDs",
        "type": "Array<number>",
        "format": "int64"
    },
    {
        "name": "flagKeys",
        "baseName": "flagKeys",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "flagTags",
        "baseName": "flagTags",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "flagTagsOperator",
        "baseName": "flagTagsOperator",
        "type": "EvaluationBatchRequestFlagTagsOperatorEnum",
        "format": ""
    }
];
//# sourceMappingURL=EvaluationBatchRequest.js.map