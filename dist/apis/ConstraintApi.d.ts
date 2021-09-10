import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Constraint } from '../models/Constraint';
import { CreateConstraintRequest } from '../models/CreateConstraintRequest';
export declare class ConstraintApiRequestFactory extends BaseAPIRequestFactory {
    createConstraint(flagID: number, segmentID: number, body: CreateConstraintRequest, _options?: Configuration): Promise<RequestContext>;
    deleteConstraint(flagID: number, segmentID: number, constraintID: number, _options?: Configuration): Promise<RequestContext>;
    findConstraints(flagID: number, segmentID: number, _options?: Configuration): Promise<RequestContext>;
    putConstraint(flagID: number, segmentID: number, constraintID: number, body: CreateConstraintRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ConstraintApiResponseProcessor {
    createConstraint(response: ResponseContext): Promise<Constraint>;
    deleteConstraint(response: ResponseContext): Promise<void>;
    findConstraints(response: ResponseContext): Promise<Array<Constraint>>;
    putConstraint(response: ResponseContext): Promise<Constraint>;
}
