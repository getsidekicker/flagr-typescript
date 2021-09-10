import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { Constraint } from '../models/Constraint';
import { CreateConstraintRequest } from '../models/CreateConstraintRequest';
import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { CreateSegmentRequest } from '../models/CreateSegmentRequest';
import { CreateTagRequest } from '../models/CreateTagRequest';
import { CreateVariantRequest } from '../models/CreateVariantRequest';
import { Distribution } from '../models/Distribution';
import { EvalContext } from '../models/EvalContext';
import { EvalResult } from '../models/EvalResult';
import { EvaluationBatchRequest } from '../models/EvaluationBatchRequest';
import { EvaluationBatchResponse } from '../models/EvaluationBatchResponse';
import { Flag } from '../models/Flag';
import { FlagSnapshot } from '../models/FlagSnapshot';
import { Health } from '../models/Health';
import { PutDistributionsRequest } from '../models/PutDistributionsRequest';
import { PutFlagRequest } from '../models/PutFlagRequest';
import { PutSegmentReorderRequest } from '../models/PutSegmentReorderRequest';
import { PutSegmentRequest } from '../models/PutSegmentRequest';
import { PutVariantRequest } from '../models/PutVariantRequest';
import { Segment } from '../models/Segment';
import { SetFlagEnabledRequest } from '../models/SetFlagEnabledRequest';
import { Tag } from '../models/Tag';
import { Variant } from '../models/Variant';
import { ConstraintApiRequestFactory, ConstraintApiResponseProcessor } from "../apis/ConstraintApi";
export declare class ObservableConstraintApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ConstraintApiRequestFactory, responseProcessor?: ConstraintApiResponseProcessor);
    createConstraint(flagID: number, segmentID: number, body: CreateConstraintRequest, _options?: Configuration): Observable<Constraint>;
    deleteConstraint(flagID: number, segmentID: number, constraintID: number, _options?: Configuration): Observable<void>;
    findConstraints(flagID: number, segmentID: number, _options?: Configuration): Observable<Array<Constraint>>;
    putConstraint(flagID: number, segmentID: number, constraintID: number, body: CreateConstraintRequest, _options?: Configuration): Observable<Constraint>;
}
import { DistributionApiRequestFactory, DistributionApiResponseProcessor } from "../apis/DistributionApi";
export declare class ObservableDistributionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DistributionApiRequestFactory, responseProcessor?: DistributionApiResponseProcessor);
    findDistributions(flagID: number, segmentID: number, _options?: Configuration): Observable<Array<Distribution>>;
    putDistributions(flagID: number, segmentID: number, body: PutDistributionsRequest, _options?: Configuration): Observable<Array<Distribution>>;
}
import { EvaluationApiRequestFactory, EvaluationApiResponseProcessor } from "../apis/EvaluationApi";
export declare class ObservableEvaluationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EvaluationApiRequestFactory, responseProcessor?: EvaluationApiResponseProcessor);
    postEvaluation(body: EvalContext, _options?: Configuration): Observable<EvalResult>;
    postEvaluationBatch(body: EvaluationBatchRequest, _options?: Configuration): Observable<EvaluationBatchResponse>;
}
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi";
export declare class ObservableExportApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor);
    getExportEvalCacheJSON(_options?: Configuration): Observable<any>;
    getExportSqlite(excludeSnapshots?: boolean, _options?: Configuration): Observable<HttpFile>;
}
import { FlagApiRequestFactory, FlagApiResponseProcessor } from "../apis/FlagApi";
export declare class ObservableFlagApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FlagApiRequestFactory, responseProcessor?: FlagApiResponseProcessor);
    createFlag(body: CreateFlagRequest, _options?: Configuration): Observable<Flag>;
    deleteFlag(flagID: number, _options?: Configuration): Observable<void>;
    findFlags(limit?: number, enabled?: boolean, description?: string, tags?: string, descriptionLike?: string, key?: string, offset?: number, preload?: boolean, deleted?: boolean, _options?: Configuration): Observable<Array<Flag>>;
    getFlag(flagID: number, _options?: Configuration): Observable<Flag>;
    getFlagEntityTypes(_options?: Configuration): Observable<Array<string>>;
    getFlagSnapshots(flagID: number, _options?: Configuration): Observable<Array<FlagSnapshot>>;
    putFlag(flagID: number, body: PutFlagRequest, _options?: Configuration): Observable<Flag>;
    restoreFlag(flagID: number, _options?: Configuration): Observable<Flag>;
    setFlagEnabled(flagID: number, body: SetFlagEnabledRequest, _options?: Configuration): Observable<Flag>;
}
import { HealthApiRequestFactory, HealthApiResponseProcessor } from "../apis/HealthApi";
export declare class ObservableHealthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor);
    getHealth(_options?: Configuration): Observable<Health>;
}
import { SegmentApiRequestFactory, SegmentApiResponseProcessor } from "../apis/SegmentApi";
export declare class ObservableSegmentApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SegmentApiRequestFactory, responseProcessor?: SegmentApiResponseProcessor);
    createSegment(flagID: number, body: CreateSegmentRequest, _options?: Configuration): Observable<Segment>;
    deleteSegment(flagID: number, segmentID: number, _options?: Configuration): Observable<void>;
    findSegments(flagID: number, _options?: Configuration): Observable<Array<Segment>>;
    putSegment(flagID: number, segmentID: number, body: PutSegmentRequest, _options?: Configuration): Observable<Segment>;
    putSegmentsReorder(flagID: number, body: PutSegmentReorderRequest, _options?: Configuration): Observable<void>;
}
import { TagApiRequestFactory, TagApiResponseProcessor } from "../apis/TagApi";
export declare class ObservableTagApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TagApiRequestFactory, responseProcessor?: TagApiResponseProcessor);
    createTag(flagID: number, body: CreateTagRequest, _options?: Configuration): Observable<Tag>;
    deleteTag(flagID: number, tagID: number, _options?: Configuration): Observable<void>;
    findAllTags(limit?: number, offset?: number, valueLike?: string, _options?: Configuration): Observable<Array<Tag>>;
    findTags(flagID: number, _options?: Configuration): Observable<Array<Tag>>;
}
import { VariantApiRequestFactory, VariantApiResponseProcessor } from "../apis/VariantApi";
export declare class ObservableVariantApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: VariantApiRequestFactory, responseProcessor?: VariantApiResponseProcessor);
    createVariant(flagID: number, body: CreateVariantRequest, _options?: Configuration): Observable<Variant>;
    deleteVariant(flagID: number, variantID: number, _options?: Configuration): Observable<void>;
    findVariants(flagID: number, _options?: Configuration): Observable<Array<Variant>>;
    putVariant(flagID: number, variantID: number, body: PutVariantRequest, _options?: Configuration): Observable<Variant>;
}
