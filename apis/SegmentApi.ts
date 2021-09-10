// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateSegmentRequest } from '../models/CreateSegmentRequest';
import { ModelError } from '../models/ModelError';
import { PutSegmentReorderRequest } from '../models/PutSegmentReorderRequest';
import { PutSegmentRequest } from '../models/PutSegmentRequest';
import { Segment } from '../models/Segment';

/**
 * no description
 */
export class SegmentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param flagID numeric ID of the flag to get
     * @param body create a segment under a flag
     */
    public async createSegment(flagID: number, body: CreateSegmentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling createSegment.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createSegment.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments'
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
            ObjectSerializer.serialize(body, "CreateSegmentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public async deleteSegment(flagID: number, segmentID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling deleteSegment.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling deleteSegment.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));

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
     * @param flagID numeric ID of the flag to get
     */
    public async findSegments(flagID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling findSegments.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments'
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
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body update a segment
     */
    public async putSegment(flagID: number, segmentID: number, body: PutSegmentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling putSegment.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling putSegment.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling putSegment.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));

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
            ObjectSerializer.serialize(body, "PutSegmentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag
     * @param body reorder segments
     */
    public async putSegmentsReorder(flagID: number, body: PutSegmentReorderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling putSegmentsReorder.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling putSegmentsReorder.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/reorder'
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
            ObjectSerializer.serialize(body, "PutSegmentReorderRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}

export class SegmentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSegment(response: ResponseContext): Promise<Segment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
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
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSegment(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to findSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findSegments(response: ResponseContext): Promise<Array<Segment> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Segment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Segment>", ""
            ) as Array<Segment>;
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
            const body: Array<Segment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Segment>", ""
            ) as Array<Segment>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putSegment(response: ResponseContext): Promise<Segment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
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
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putSegmentsReorder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putSegmentsReorder(response: ResponseContext): Promise<void > {
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

}
