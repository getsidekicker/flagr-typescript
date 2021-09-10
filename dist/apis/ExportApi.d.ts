import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
export declare class ExportApiRequestFactory extends BaseAPIRequestFactory {
    getExportEvalCacheJSON(_options?: Configuration): Promise<RequestContext>;
    getExportSqlite(excludeSnapshots?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class ExportApiResponseProcessor {
    getExportEvalCacheJSON(response: ResponseContext): Promise<any>;
    getExportSqlite(response: ResponseContext): Promise<HttpFile>;
}
