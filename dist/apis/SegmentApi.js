"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentApiResponseProcessor = exports.SegmentApiRequestFactory = void 0;
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
class SegmentApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createSegment(flagID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling createSegment.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createSegment.');
            }
            const localVarPath = '/flags/{flagID}/segments'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CreateSegmentRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
    deleteSegment(flagID, segmentID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling deleteSegment.');
            }
            if (segmentID === null || segmentID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter segmentID was null or undefined when calling deleteSegment.');
            }
            const localVarPath = '/flags/{flagID}/segments/{segmentID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
                .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    findSegments(flagID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling findSegments.');
            }
            const localVarPath = '/flags/{flagID}/segments'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    putSegment(flagID, segmentID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling putSegment.');
            }
            if (segmentID === null || segmentID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter segmentID was null or undefined when calling putSegment.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling putSegment.');
            }
            const localVarPath = '/flags/{flagID}/segments/{segmentID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
                .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PutSegmentRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
    putSegmentsReorder(flagID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling putSegmentsReorder.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling putSegmentsReorder.');
            }
            const localVarPath = '/flags/{flagID}/segments/reorder'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PutSegmentReorderRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
}
exports.SegmentApiRequestFactory = SegmentApiRequestFactory;
class SegmentApiResponseProcessor {
    createSegment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Segment", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Segment", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    deleteSegment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                return;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "void", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    findSegments(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Segment>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Segment>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    putSegment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Segment", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Segment", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    putSegmentsReorder(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                return;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "void", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
}
exports.SegmentApiResponseProcessor = SegmentApiResponseProcessor;
//# sourceMappingURL=SegmentApi.js.map