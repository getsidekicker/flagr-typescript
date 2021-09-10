import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Health } from '../models/Health';
export declare class HealthApiRequestFactory extends BaseAPIRequestFactory {
    getHealth(_options?: Configuration): Promise<RequestContext>;
}
export declare class HealthApiResponseProcessor {
    getHealth(response: ResponseContext): Promise<Health>;
}
