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
exports.DistributionApiResponseProcessor = exports.DistributionApiRequestFactory = void 0;
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
class DistributionApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    findDistributions(flagID, segmentID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling findDistributions.');
            }
            if (segmentID === null || segmentID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter segmentID was null or undefined when calling findDistributions.');
            }
            const localVarPath = '/flags/{flagID}/segments/{segmentID}/distributions'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
                .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    putDistributions(flagID, segmentID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling putDistributions.');
            }
            if (segmentID === null || segmentID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter segmentID was null or undefined when calling putDistributions.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling putDistributions.');
            }
            const localVarPath = '/flags/{flagID}/segments/{segmentID}/distributions'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
                .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PutDistributionsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
}
exports.DistributionApiRequestFactory = DistributionApiRequestFactory;
class DistributionApiResponseProcessor {
    findDistributions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Distribution>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Distribution>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    putDistributions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Distribution>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Distribution>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
}
exports.DistributionApiResponseProcessor = DistributionApiResponseProcessor;
//# sourceMappingURL=DistributionApi.js.map