"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./Constraint"), exports);
__exportStar(require("./CreateConstraintRequest"), exports);
__exportStar(require("./CreateFlagRequest"), exports);
__exportStar(require("./CreateSegmentRequest"), exports);
__exportStar(require("./CreateTagRequest"), exports);
__exportStar(require("./CreateVariantRequest"), exports);
__exportStar(require("./Distribution"), exports);
__exportStar(require("./EvalContext"), exports);
__exportStar(require("./EvalDebugLog"), exports);
__exportStar(require("./EvalResult"), exports);
__exportStar(require("./EvaluationBatchRequest"), exports);
__exportStar(require("./EvaluationBatchResponse"), exports);
__exportStar(require("./EvaluationEntity"), exports);
__exportStar(require("./Flag"), exports);
__exportStar(require("./FlagSnapshot"), exports);
__exportStar(require("./Health"), exports);
__exportStar(require("./ModelError"), exports);
__exportStar(require("./PutDistributionsRequest"), exports);
__exportStar(require("./PutFlagRequest"), exports);
__exportStar(require("./PutSegmentReorderRequest"), exports);
__exportStar(require("./PutSegmentRequest"), exports);
__exportStar(require("./PutVariantRequest"), exports);
__exportStar(require("./Segment"), exports);
__exportStar(require("./SegmentDebugLog"), exports);
__exportStar(require("./SetFlagEnabledRequest"), exports);
__exportStar(require("./Tag"), exports);
__exportStar(require("./Variant"), exports);
const Constraint_1 = require("./Constraint");
const CreateConstraintRequest_1 = require("./CreateConstraintRequest");
const CreateFlagRequest_1 = require("./CreateFlagRequest");
const CreateSegmentRequest_1 = require("./CreateSegmentRequest");
const CreateTagRequest_1 = require("./CreateTagRequest");
const CreateVariantRequest_1 = require("./CreateVariantRequest");
const Distribution_1 = require("./Distribution");
const EvalContext_1 = require("./EvalContext");
const EvalDebugLog_1 = require("./EvalDebugLog");
const EvalResult_1 = require("./EvalResult");
const EvaluationBatchRequest_1 = require("./EvaluationBatchRequest");
const EvaluationBatchResponse_1 = require("./EvaluationBatchResponse");
const EvaluationEntity_1 = require("./EvaluationEntity");
const Flag_1 = require("./Flag");
const FlagSnapshot_1 = require("./FlagSnapshot");
const Health_1 = require("./Health");
const ModelError_1 = require("./ModelError");
const PutDistributionsRequest_1 = require("./PutDistributionsRequest");
const PutFlagRequest_1 = require("./PutFlagRequest");
const PutSegmentReorderRequest_1 = require("./PutSegmentReorderRequest");
const PutSegmentRequest_1 = require("./PutSegmentRequest");
const PutVariantRequest_1 = require("./PutVariantRequest");
const Segment_1 = require("./Segment");
const SegmentDebugLog_1 = require("./SegmentDebugLog");
const SetFlagEnabledRequest_1 = require("./SetFlagEnabledRequest");
const Tag_1 = require("./Tag");
const Variant_1 = require("./Variant");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
let enumsMap = new Set([
    "ConstraintOperatorEnum",
    "EvalContextFlagTagsOperatorEnum",
    "EvaluationBatchRequestFlagTagsOperatorEnum",
]);
let typeMap = {
    "Constraint": Constraint_1.Constraint,
    "CreateConstraintRequest": CreateConstraintRequest_1.CreateConstraintRequest,
    "CreateFlagRequest": CreateFlagRequest_1.CreateFlagRequest,
    "CreateSegmentRequest": CreateSegmentRequest_1.CreateSegmentRequest,
    "CreateTagRequest": CreateTagRequest_1.CreateTagRequest,
    "CreateVariantRequest": CreateVariantRequest_1.CreateVariantRequest,
    "Distribution": Distribution_1.Distribution,
    "EvalContext": EvalContext_1.EvalContext,
    "EvalDebugLog": EvalDebugLog_1.EvalDebugLog,
    "EvalResult": EvalResult_1.EvalResult,
    "EvaluationBatchRequest": EvaluationBatchRequest_1.EvaluationBatchRequest,
    "EvaluationBatchResponse": EvaluationBatchResponse_1.EvaluationBatchResponse,
    "EvaluationEntity": EvaluationEntity_1.EvaluationEntity,
    "Flag": Flag_1.Flag,
    "FlagSnapshot": FlagSnapshot_1.FlagSnapshot,
    "Health": Health_1.Health,
    "ModelError": ModelError_1.ModelError,
    "PutDistributionsRequest": PutDistributionsRequest_1.PutDistributionsRequest,
    "PutFlagRequest": PutFlagRequest_1.PutFlagRequest,
    "PutSegmentReorderRequest": PutSegmentReorderRequest_1.PutSegmentReorderRequest,
    "PutSegmentRequest": PutSegmentRequest_1.PutSegmentRequest,
    "PutVariantRequest": PutVariantRequest_1.PutVariantRequest,
    "Segment": Segment_1.Segment,
    "SegmentDebugLog": SegmentDebugLog_1.SegmentDebugLog,
    "SetFlagEnabledRequest": SetFlagEnabledRequest_1.SetFlagEnabledRequest,
    "Tag": Tag_1.Tag,
    "Variant": Variant_1.Variant,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map