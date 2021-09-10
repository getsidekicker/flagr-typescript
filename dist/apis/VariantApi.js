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
exports.VariantApiResponseProcessor = exports.VariantApiRequestFactory = void 0;
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
class VariantApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createVariant(flagID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling createVariant.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createVariant.');
            }
            const localVarPath = '/flags/{flagID}/variants'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CreateVariantRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
    deleteVariant(flagID, variantID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling deleteVariant.');
            }
            if (variantID === null || variantID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter variantID was null or undefined when calling deleteVariant.');
            }
            const localVarPath = '/flags/{flagID}/variants/{variantID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
                .replace('{' + 'variantID' + '}', encodeURIComponent(String(variantID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    findVariants(flagID, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling findVariants.');
            }
            const localVarPath = '/flags/{flagID}/variants'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            return requestContext;
        });
    }
    putVariant(flagID, variantID, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (flagID === null || flagID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter flagID was null or undefined when calling putVariant.');
            }
            if (variantID === null || variantID === undefined) {
                throw new baseapi_1.RequiredError('Required parameter variantID was null or undefined when calling putVariant.');
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling putVariant.');
            }
            const localVarPath = '/flags/{flagID}/variants/{variantID}'
                .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
                .replace('{' + 'variantID' + '}', encodeURIComponent(String(variantID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PutVariantRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            return requestContext;
        });
    }
}
exports.VariantApiRequestFactory = VariantApiRequestFactory;
class VariantApiResponseProcessor {
    createVariant(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Variant", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Variant", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    deleteVariant(response) {
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
    findVariants(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Variant>", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Variant>", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
    putVariant(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Variant", "");
                return body;
            }
            if (util_1.isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ModelError", "");
                throw new exception_1.ApiException(0, body);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Variant", "");
                return body;
            }
            let body = response.body || "";
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
        });
    }
}
exports.VariantApiResponseProcessor = VariantApiResponseProcessor;
//# sourceMappingURL=VariantApi.js.map