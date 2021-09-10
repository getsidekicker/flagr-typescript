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
exports.FlagApiResponseProcessor = exports.FlagApiRequestFactory = void 0;
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
class FlagApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createFlag(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createFlag.');
            }
            const localVarPath = '/flags';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CreateFlagRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
    deleteFlag(flagID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling deleteFlag.');
            }
            const localVarPath = '/flags/{flagID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/flags';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int64"));
            }
            if (enabled !== undefined) {
                requestContext.setQueryParam("enabled", ObjectSerializer_1.ObjectSerializer.serialize(enabled, "boolean", ""));
            }
            if (description !== undefined) {
                requestContext.setQueryParam("description", ObjectSerializer_1.ObjectSerializer.serialize(description, "string", ""));
            }
            if (tags !== undefined) {
                requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""));
            }
            if (descriptionLike !== undefined) {
                requestContext.setQueryParam("description_like", ObjectSerializer_1.ObjectSerializer.serialize(descriptionLike, "string", ""));
            }
            if (key !== undefined) {
                requestContext.setQueryParam("key", ObjectSerializer_1.ObjectSerializer.serialize(key, "string", ""));
            }
            if (offset !== undefined) {
                requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", "int64"));
            }
            if (preload !== undefined) {
                requestContext.setQueryParam("preload", ObjectSerializer_1.ObjectSerializer.serialize(preload, "boolean", ""));
            }
            if (deleted !== undefined) {
                requestContext.setQueryParam("deleted", ObjectSerializer_1.ObjectSerializer.serialize(deleted, "boolean", ""));
            }
            return requestContext;
        });
    }
    getFlag(flagID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling getFlag.');
            }
            const localVarPath = '/flags/{flagID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    getFlagEntityTypes(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/flags/entity_types';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    getFlagSnapshots(flagID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling getFlagSnapshots.');
            }
            const localVarPath = '/flags/{flagID}/snapshots'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    putFlag(flagID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling putFlag.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling putFlag.');
            }
            const localVarPath = '/flags/{flagID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PutFlagRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
    restoreFlag(flagID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling restoreFlag.');
            }
            const localVarPath = '/flags/{flagID}/restore'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    setFlagEnabled(flagID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling setFlagEnabled.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling setFlagEnabled.');
            }
            const localVarPath = '/flags/{flagID}/enabled'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SetFlagEnabledRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
}
exports.FlagApiRequestFactory = FlagApiRequestFactory;
class FlagApiResponseProcessor {
    createFlag(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    deleteFlag(response) {
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
    findFlags(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Flag>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Flag>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    getFlag(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    getFlagEntityTypes(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<string>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<string>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    getFlagSnapshots(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<FlagSnapshot>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<FlagSnapshot>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    putFlag(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    restoreFlag(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    setFlagEnabled(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Flag", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
}
exports.FlagApiResponseProcessor = FlagApiResponseProcessor;
//# sourceMappingURL=FlagApi.js.map