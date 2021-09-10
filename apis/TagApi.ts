// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateTagRequest } from '../models/CreateTagRequest';
import { ModelError } from '../models/ModelError';
import { Tag } from '../models/Tag';

/**
 * no description
 */
export class TagApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param flagID numeric ID of the flag
     * @param body create a tag
     */
    public async createTag(flagID: number, body: CreateTagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling createTag.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createTag.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/tags'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)));

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
            ObjectSerializer.serialize(body, "CreateTagRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag
     * @param tagID numeric ID of the tag
     */
    public async deleteTag(flagID: number, tagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling deleteTag.');
        }


        // verify required parameter 'tagID' is not null or undefined
        if (tagID === null || tagID === undefined) {
            throw new RequiredError('Required parameter tagID was null or undefined when calling deleteTag.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/tags/{tagID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'tagID' + '}', encodeURIComponent(String(tagID)));

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
     * @param limit the numbers of tags to return
     * @param offset return tags given the offset, it should usually set together with limit
     * @param valueLike return tags partially matching given value
     */
    public async findAllTags(limit?: number, offset?: number, valueLike?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/tags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
        }
        if (valueLike !== undefined) {
            requestContext.setQueryParam("value_like", ObjectSerializer.serialize(valueLike, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag
     */
    public async findTags(flagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling findTags.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/tags'
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

}

export class TagApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTag(response: ResponseContext): Promise<Tag > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tag", ""
            ) as Tag;
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
            const body: Tag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tag", ""
            ) as Tag;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTag(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to findAllTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findAllTags(response: ResponseContext): Promise<Array<Tag> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Tag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tag>", ""
            ) as Array<Tag>;
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
            const body: Array<Tag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tag>", ""
            ) as Array<Tag>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to findTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findTags(response: ResponseContext): Promise<Array<Tag> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Tag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tag>", ""
            ) as Array<Tag>;
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
            const body: Array<Tag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tag>", ""
            ) as Array<Tag>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
