"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationBatchResponse = void 0;
class EvaluationBatchResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return EvaluationBatchResponse.attributeTypeMap;
    }
}
exports.EvaluationBatchResponse = EvaluationBatchResponse;
EvaluationBatchResponse.discriminator = undefined;
EvaluationBatchResponse.attributeTypeMap = [
    {
        "name": "evaluationResults",
        "baseName": "evaluationResults",
        "type": "Array<EvalResult>",
        "format": ""
    }
];
//# sourceMappingURL=EvaluationBatchResponse.js.map