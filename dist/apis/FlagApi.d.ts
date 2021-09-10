import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { Flag } from '../models/Flag';
import { FlagSnapshot } from '../models/FlagSnapshot';
import { PutFlagRequest } from '../models/PutFlagRequest';
import { SetFlagEnabledRequest } from '../models/SetFlagEnabledRequest';
export declare class FlagApiRequestFactory extends BaseAPIRequestFactory {
    createFlag(body: CreateFlagRequest, _options?: Configuration): Promise<RequestContext>;
    deleteFlag(flagID: number, _options?: Configuration): Promise<RequestContext>;
    findFlags(limit?: number, enabled?: boolean, description?: string, tags?: string, descriptionLike?: string, key?: string, offset?: number, preload?: boolean, deleted?: boolean, _options?: Configuration): Promise<RequestContext>;
    getFlag(flagID: number, _options?: Configuration): Promise<RequestContext>;
    getFlagEntityTypes(_options?: Configuration): Promise<RequestContext>;
    getFlagSnapshots(flagID: number, _options?: Configuration): Promise<RequestContext>;
    putFlag(flagID: number, body: PutFlagRequest, _options?: Configuration): Promise<RequestContext>;
    restoreFlag(flagID: number, _options?: Configuration): Promise<RequestContext>;
    setFlagEnabled(flagID: number, body: SetFlagEnabledRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class FlagApiResponseProcessor {
    createFlag(response: ResponseContext): Promise<Flag>;
    deleteFlag(response: ResponseContext): Promise<void>;
    findFlags(response: ResponseContext): Promise<Array<Flag>>;
    getFlag(response: ResponseContext): Promise<Flag>;
    getFlagEntityTypes(response: ResponseContext): Promise<Array<string>>;
    getFlagSnapshots(response: ResponseContext): Promise<Array<FlagSnapshot>>;
    putFlag(response: ResponseContext): Promise<Flag>;
    restoreFlag(response: ResponseContext): Promise<Flag>;
    setFlagEnabled(response: ResponseContext): Promise<Flag>;
}
