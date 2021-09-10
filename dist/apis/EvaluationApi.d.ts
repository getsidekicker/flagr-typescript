import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { EvalContext } from '../models/EvalContext';
import { EvalResult } from '../models/EvalResult';
import { EvaluationBatchRequest } from '../models/EvaluationBatchRequest';
import { EvaluationBatchResponse } from '../models/EvaluationBatchResponse';
export declare class EvaluationApiRequestFactory extends BaseAPIRequestFactory {
    postEvaluation(body: EvalContext, _options?: Configuration): Promise<RequestContext>;
    postEvaluationBatch(body: EvaluationBatchRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class EvaluationApiResponseProcessor {
    postEvaluation(response: ResponseContext): Promise<EvalResult>;
    postEvaluationBatch(response: ResponseContext): Promise<EvaluationBatchResponse>;
}
