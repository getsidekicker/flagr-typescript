import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateVariantRequest } from '../models/CreateVariantRequest';
import { PutVariantRequest } from '../models/PutVariantRequest';
import { Variant } from '../models/Variant';
export declare class VariantApiRequestFactory extends BaseAPIRequestFactory {
    createVariant(flagID: number, body: CreateVariantRequest, _options?: Configuration): Promise<RequestContext>;
    deleteVariant(flagID: number, variantID: number, _options?: Configuration): Promise<RequestContext>;
    findVariants(flagID: number, _options?: Configuration): Promise<RequestContext>;
    putVariant(flagID: number, variantID: number, body: PutVariantRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class VariantApiResponseProcessor {
    createVariant(response: ResponseContext): Promise<Variant>;
    deleteVariant(response: ResponseContext): Promise<void>;
    findVariants(response: ResponseContext): Promise<Array<Variant>>;
    putVariant(response: ResponseContext): Promise<Variant>;
}
