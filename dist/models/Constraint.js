"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constraint = void 0;
class Constraint {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Constraint.attributeTypeMap;
    }
}
exports.Constraint = Constraint;
Constraint.discriminator = undefined;
Constraint.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "property",
        "baseName": "property",
        "type": "string",
        "format": ""
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "ConstraintOperatorEnum",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=Constraint.js.map