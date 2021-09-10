// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { Flag } from '../models/Flag';
import { FlagSnapshot } from '../models/FlagSnapshot';
import { ModelError } from '../models/ModelError';
import { PutFlagRequest } from '../models/PutFlagRequest';
import { SetFlagEnabledRequest } from '../models/SetFlagEnabledRequest';

/**
 * no description
 */
export class FlagApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param body create a flag
     */
    public async createFlag(body: CreateFlagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createFlag.');
        }


        // Path Params
        const localVarPath = '/flags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "CreateFlagRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag
     */
    public async deleteFlag(flagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling deleteFlag.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param limit the numbers of flags to return
     * @param enabled return flags having given enabled status
     * @param description return flags exactly matching given description
     * @param tags return flags with the given tags (comma separated)
     * @param descriptionLike return flags partially matching given description
     * @param key return flags matching given key
     * @param offset return flags given the offset, it should usually set together with limit
     * @param preload return flags with preloaded segments and variants
     * @param deleted return all deleted flags
     */
    public async findFlags(limit?: number, enabled?: boolean, description?: string, tags?: string, descriptionLike?: string, key?: string, offset?: number, preload?: boolean, deleted?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/flags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }
        if (enabled !== undefined) {
            requestContext.setQueryParam("enabled", ObjectSerializer.serialize(enabled, "boolean", ""));
        }
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
        }
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }
        if (descriptionLike !== undefined) {
            requestContext.setQueryParam("description_like", ObjectSerializer.serialize(descriptionLike, "string", ""));
        }
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
        }
        if (preload !== undefined) {
            requestContext.setQueryParam("preload", ObjectSerializer.serialize(preload, "boolean", ""));
        }
        if (deleted !== undefined) {
            requestContext.setQueryParam("deleted", ObjectSerializer.serialize(deleted, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public async getFlag(flagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling getFlag.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     */
    public async getFlagEntityTypes(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/flags/entity_types';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public async getFlagSnapshots(flagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling getFlagSnapshots.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/snapshots'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag to get
     * @param body update a flag
     */
    public async putFlag(flagID: number, body: PutFlagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling putFlag.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling putFlag.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "PutFlagRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public async restoreFlag(flagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling restoreFlag.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/restore'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag to get
     * @param body set flag enabled state
     */
    public async setFlagEnabled(flagID: number, body: SetFlagEnabledRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling setFlagEnabled.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling setFlagEnabled.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/enabled'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SetFlagEnabledRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}

export class FlagApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createFlag(response: ResponseContext): Promise<Flag > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFlag(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to findFlags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findFlags(response: ResponseContext): Promise<Array<Flag> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Flag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Flag>", ""
            ) as Array<Flag>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Flag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Flag>", ""
            ) as Array<Flag>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFlag(response: ResponseContext): Promise<Flag > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFlagEntityTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFlagEntityTypes(response: ResponseContext): Promise<Array<string> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFlagSnapshots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFlagSnapshots(response: ResponseContext): Promise<Array<FlagSnapshot> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FlagSnapshot> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FlagSnapshot>", ""
            ) as Array<FlagSnapshot>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<FlagSnapshot> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FlagSnapshot>", ""
            ) as Array<FlagSnapshot>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putFlag(response: ResponseContext): Promise<Flag > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restoreFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restoreFlag(response: ResponseContext): Promise<Flag > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setFlagEnabled
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setFlagEnabled(response: ResponseContext): Promise<Flag > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
