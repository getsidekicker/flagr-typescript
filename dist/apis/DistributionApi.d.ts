import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Distribution } from '../models/Distribution';
import { PutDistributionsRequest } from '../models/PutDistributionsRequest';
export declare class DistributionApiRequestFactory extends BaseAPIRequestFactory {
    findDistributions(flagID: number, segmentID: number, _options?: Configuration): Promise<RequestContext>;
    putDistributions(flagID: number, segmentID: number, body: PutDistributionsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DistributionApiResponseProcessor {
    findDistributions(response: ResponseContext): Promise<Array<Distribution>>;
    putDistributions(response: ResponseContext): Promise<Array<Distribution>>;
}
