// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Distribution } from '../models/Distribution';
import { ModelError } from '../models/ModelError';
import { PutDistributionsRequest } from '../models/PutDistributionsRequest';

/**
 * no description
 */
export class DistributionApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public async findDistributions(flagID: number, segmentID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling findDistributions.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling findDistributions.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}/distributions'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));

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
     * replace the distribution with the new setting
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body array of distributions
     */
    public async putDistributions(flagID: number, segmentID: number, body: PutDistributionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling putDistributions.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling putDistributions.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling putDistributions.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}/distributions'
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
            ObjectSerializer.serialize(body, "PutDistributionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}

export class DistributionApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to findDistributions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findDistributions(response: ResponseContext): Promise<Array<Distribution> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Distribution> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Distribution>", ""
            ) as Array<Distribution>;
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
            const body: Array<Distribution> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Distribution>", ""
            ) as Array<Distribution>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putDistributions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putDistributions(response: ResponseContext): Promise<Array<Distribution> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Distribution> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Distribution>", ""
            ) as Array<Distribution>;
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
            const body: Array<Distribution> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Distribution>", ""
            ) as Array<Distribution>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
