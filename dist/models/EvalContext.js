"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvalContext = void 0;
class EvalContext {
    constructor() {
    }
    static getAttributeTypeMap() {
        return EvalContext.attributeTypeMap;
    }
}
exports.EvalContext = EvalContext;
EvalContext.discriminator = undefined;
EvalContext.attributeTypeMap = [
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
    },
    {
        "name": "enableDebug",
        "baseName": "enableDebug",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "flagID",
        "baseName": "flagID",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "flagKey",
        "baseName": "flagKey",
        "type": "string",
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
        "type": "EvalContextFlagTagsOperatorEnum",
        "format": ""
    }
];
//# sourceMappingURL=EvalContext.js.map