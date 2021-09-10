"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDistributionsRequest = void 0;
class PutDistributionsRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PutDistributionsRequest.attributeTypeMap;
    }
}
exports.PutDistributionsRequest = PutDistributionsRequest;
PutDistributionsRequest.discriminator = undefined;
PutDistributionsRequest.attributeTypeMap = [
    {
        "name": "distributions",
        "baseName": "distributions",
        "type": "Array<Distribution>",
        "format": ""
    }
];
//# sourceMappingURL=PutDistributionsRequest.js.map