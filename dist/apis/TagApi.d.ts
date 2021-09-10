import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateTagRequest } from '../models/CreateTagRequest';
import { Tag } from '../models/Tag';
export declare class TagApiRequestFactory extends BaseAPIRequestFactory {
    createTag(flagID: number, body: CreateTagRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTag(flagID: number, tagID: number, _options?: Configuration): Promise<RequestContext>;
    findAllTags(limit?: number, offset?: number, valueLike?: string, _options?: Configuration): Promise<RequestContext>;
    findTags(flagID: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class TagApiResponseProcessor {
    createTag(response: ResponseContext): Promise<Tag>;
    deleteTag(response: ResponseContext): Promise<void>;
    findAllTags(response: ResponseContext): Promise<Array<Tag>>;
    findTags(response: ResponseContext): Promise<Array<Tag>>;
}
