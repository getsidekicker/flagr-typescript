// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Constraint } from '../models/Constraint';
import { CreateConstraintRequest } from '../models/CreateConstraintRequest';
import { ModelError } from '../models/ModelError';

/**
 * no description
 */
export class ConstraintApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body create a constraint
     */
    public async createConstraint(flagID: number, segmentID: number, body: CreateConstraintRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling createConstraint.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling createConstraint.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createConstraint.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}/constraints'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)));

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
            ObjectSerializer.serialize(body, "CreateConstraintRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param constraintID numeric ID of the constraint
     */
    public async deleteConstraint(flagID: number, segmentID: number, constraintID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling deleteConstraint.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling deleteConstraint.');
        }


        // verify required parameter 'constraintID' is not null or undefined
        if (constraintID === null || constraintID === undefined) {
            throw new RequiredError('Required parameter constraintID was null or undefined when calling deleteConstraint.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}/constraints/{constraintID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)))
            .replace('{' + 'constraintID' + '}', encodeURIComponent(String(constraintID)));

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
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public async findConstraints(flagID: number, segmentID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling findConstraints.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling findConstraints.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}/constraints'
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
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param constraintID numeric ID of the constraint
     * @param body create a constraint
     */
    public async putConstraint(flagID: number, segmentID: number, constraintID: number, body: CreateConstraintRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flagID' is not null or undefined
        if (flagID === null || flagID === undefined) {
            throw new RequiredError('Required parameter flagID was null or undefined when calling putConstraint.');
        }


        // verify required parameter 'segmentID' is not null or undefined
        if (segmentID === null || segmentID === undefined) {
            throw new RequiredError('Required parameter segmentID was null or undefined when calling putConstraint.');
        }


        // verify required parameter 'constraintID' is not null or undefined
        if (constraintID === null || constraintID === undefined) {
            throw new RequiredError('Required parameter constraintID was null or undefined when calling putConstraint.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling putConstraint.');
        }


        // Path Params
        const localVarPath = '/flags/{flagID}/segments/{segmentID}/constraints/{constraintID}'
            .replace('{' + 'flagID' + '}', encodeURIComponent(String(flagID)))
            .replace('{' + 'segmentID' + '}', encodeURIComponent(String(segmentID)))
            .replace('{' + 'constraintID' + '}', encodeURIComponent(String(constraintID)));

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
            ObjectSerializer.serialize(body, "CreateConstraintRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}

export class ConstraintApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConstraint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConstraint(response: ResponseContext): Promise<Constraint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
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
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteConstraint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteConstraint(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to findConstraints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findConstraints(response: ResponseContext): Promise<Array<Constraint> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Constraint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Constraint>", ""
            ) as Array<Constraint>;
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
            const body: Array<Constraint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Constraint>", ""
            ) as Array<Constraint>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putConstraint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putConstraint(response: ResponseContext): Promise<Constraint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
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
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
