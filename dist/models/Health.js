"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Health = void 0;
class Health {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Health.attributeTypeMap;
    }
}
exports.Health = Health;
Health.discriminator = undefined;
Health.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=Health.js.map