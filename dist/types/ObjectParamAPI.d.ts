import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
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
export interface ConstraintApiCreateConstraintRequest {
    flagID: number;
    segmentID: number;
    body: CreateConstraintRequest;
}
export interface ConstraintApiDeleteConstraintRequest {
    flagID: number;
    segmentID: number;
    constraintID: number;
}
export interface ConstraintApiFindConstraintsRequest {
    flagID: number;
    segmentID: number;
}
export interface ConstraintApiPutConstraintRequest {
    flagID: number;
    segmentID: number;
    constraintID: number;
    body: CreateConstraintRequest;
}
export declare class ObjectConstraintApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ConstraintApiRequestFactory, responseProcessor?: ConstraintApiResponseProcessor);
    createConstraint(param: ConstraintApiCreateConstraintRequest, options?: Configuration): Promise<Constraint>;
    deleteConstraint(param: ConstraintApiDeleteConstraintRequest, options?: Configuration): Promise<void>;
    findConstraints(param: ConstraintApiFindConstraintsRequest, options?: Configuration): Promise<Array<Constraint>>;
    putConstraint(param: ConstraintApiPutConstraintRequest, options?: Configuration): Promise<Constraint>;
}
import { DistributionApiRequestFactory, DistributionApiResponseProcessor } from "../apis/DistributionApi";
export interface DistributionApiFindDistributionsRequest {
    flagID: number;
    segmentID: number;
}
export interface DistributionApiPutDistributionsRequest {
    flagID: number;
    segmentID: number;
    body: PutDistributionsRequest;
}
export declare class ObjectDistributionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DistributionApiRequestFactory, responseProcessor?: DistributionApiResponseProcessor);
    findDistributions(param: DistributionApiFindDistributionsRequest, options?: Configuration): Promise<Array<Distribution>>;
    putDistributions(param: DistributionApiPutDistributionsRequest, options?: Configuration): Promise<Array<Distribution>>;
}
import { EvaluationApiRequestFactory, EvaluationApiResponseProcessor } from "../apis/EvaluationApi";
export interface EvaluationApiPostEvaluationRequest {
    body: EvalContext;
}
export interface EvaluationApiPostEvaluationBatchRequest {
    body: EvaluationBatchRequest;
}
export declare class ObjectEvaluationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EvaluationApiRequestFactory, responseProcessor?: EvaluationApiResponseProcessor);
    postEvaluation(param: EvaluationApiPostEvaluationRequest, options?: Configuration): Promise<EvalResult>;
    postEvaluationBatch(param: EvaluationApiPostEvaluationBatchRequest, options?: Configuration): Promise<EvaluationBatchResponse>;
}
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi";
export interface ExportApiGetExportEvalCacheJSONRequest {
}
export interface ExportApiGetExportSqliteRequest {
    excludeSnapshots?: boolean;
}
export declare class ObjectExportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor);
    getExportEvalCacheJSON(param: ExportApiGetExportEvalCacheJSONRequest, options?: Configuration): Promise<any>;
    getExportSqlite(param: ExportApiGetExportSqliteRequest, options?: Configuration): Promise<HttpFile>;
}
import { FlagApiRequestFactory, FlagApiResponseProcessor } from "../apis/FlagApi";
export interface FlagApiCreateFlagRequest {
    body: CreateFlagRequest;
}
export interface FlagApiDeleteFlagRequest {
    flagID: number;
}
export interface FlagApiFindFlagsRequest {
    limit?: number;
    enabled?: boolean;
    description?: string;
    tags?: string;
    descriptionLike?: string;
    key?: string;
    offset?: number;
    preload?: boolean;
    deleted?: boolean;
}
export interface FlagApiGetFlagRequest {
    flagID: number;
}
export interface FlagApiGetFlagEntityTypesRequest {
}
export interface FlagApiGetFlagSnapshotsRequest {
    flagID: number;
}
export interface FlagApiPutFlagRequest {
    flagID: number;
    body: PutFlagRequest;
}
export interface FlagApiRestoreFlagRequest {
    flagID: number;
}
export interface FlagApiSetFlagEnabledRequest {
    flagID: number;
    body: SetFlagEnabledRequest;
}
export declare class ObjectFlagApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FlagApiRequestFactory, responseProcessor?: FlagApiResponseProcessor);
    createFlag(param: FlagApiCreateFlagRequest, options?: Configuration): Promise<Flag>;
    deleteFlag(param: FlagApiDeleteFlagRequest, options?: Configuration): Promise<void>;
    findFlags(param: FlagApiFindFlagsRequest, options?: Configuration): Promise<Array<Flag>>;
    getFlag(param: FlagApiGetFlagRequest, options?: Configuration): Promise<Flag>;
    getFlagEntityTypes(param: FlagApiGetFlagEntityTypesRequest, options?: Configuration): Promise<Array<string>>;
    getFlagSnapshots(param: FlagApiGetFlagSnapshotsRequest, options?: Configuration): Promise<Array<FlagSnapshot>>;
    putFlag(param: FlagApiPutFlagRequest, options?: Configuration): Promise<Flag>;
    restoreFlag(param: FlagApiRestoreFlagRequest, options?: Configuration): Promise<Flag>;
    setFlagEnabled(param: FlagApiSetFlagEnabledRequest, options?: Configuration): Promise<Flag>;
}
import { HealthApiRequestFactory, HealthApiResponseProcessor } from "../apis/HealthApi";
export interface HealthApiGetHealthRequest {
}
export declare class ObjectHealthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor);
    getHealth(param: HealthApiGetHealthRequest, options?: Configuration): Promise<Health>;
}
import { SegmentApiRequestFactory, SegmentApiResponseProcessor } from "../apis/SegmentApi";
export interface SegmentApiCreateSegmentRequest {
    flagID: number;
    body: CreateSegmentRequest;
}
export interface SegmentApiDeleteSegmentRequest {
    flagID: number;
    segmentID: number;
}
export interface SegmentApiFindSegmentsRequest {
    flagID: number;
}
export interface SegmentApiPutSegmentRequest {
    flagID: number;
    segmentID: number;
    body: PutSegmentRequest;
}
export interface SegmentApiPutSegmentsReorderRequest {
    flagID: number;
    body: PutSegmentReorderRequest;
}
export declare class ObjectSegmentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SegmentApiRequestFactory, responseProcessor?: SegmentApiResponseProcessor);
    createSegment(param: SegmentApiCreateSegmentRequest, options?: Configuration): Promise<Segment>;
    deleteSegment(param: SegmentApiDeleteSegmentRequest, options?: Configuration): Promise<void>;
    findSegments(param: SegmentApiFindSegmentsRequest, options?: Configuration): Promise<Array<Segment>>;
    putSegment(param: SegmentApiPutSegmentRequest, options?: Configuration): Promise<Segment>;
    putSegmentsReorder(param: SegmentApiPutSegmentsReorderRequest, options?: Configuration): Promise<void>;
}
import { TagApiRequestFactory, TagApiResponseProcessor } from "../apis/TagApi";
export interface TagApiCreateTagRequest {
    flagID: number;
    body: CreateTagRequest;
}
export interface TagApiDeleteTagRequest {
    flagID: number;
    tagID: number;
}
export interface TagApiFindAllTagsRequest {
    limit?: number;
    offset?: number;
    valueLike?: string;
}
export interface TagApiFindTagsRequest {
    flagID: number;
}
export declare class ObjectTagApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TagApiRequestFactory, responseProcessor?: TagApiResponseProcessor);
    createTag(param: TagApiCreateTagRequest, options?: Configuration): Promise<Tag>;
    deleteTag(param: TagApiDeleteTagRequest, options?: Configuration): Promise<void>;
    findAllTags(param: TagApiFindAllTagsRequest, options?: Configuration): Promise<Array<Tag>>;
    findTags(param: TagApiFindTagsRequest, options?: Configuration): Promise<Array<Tag>>;
}
import { VariantApiRequestFactory, VariantApiResponseProcessor } from "../apis/VariantApi";
export interface VariantApiCreateVariantRequest {
    flagID: number;
    body: CreateVariantRequest;
}
export interface VariantApiDeleteVariantRequest {
    flagID: number;
    variantID: number;
}
export interface VariantApiFindVariantsRequest {
    flagID: number;
}
export interface VariantApiPutVariantRequest {
    flagID: number;
    variantID: number;
    body: PutVariantRequest;
}
export declare class ObjectVariantApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: VariantApiRequestFactory, responseProcessor?: VariantApiResponseProcessor);
    createVariant(param: VariantApiCreateVariantRequest, options?: Configuration): Promise<Variant>;
    deleteVariant(param: VariantApiDeleteVariantRequest, options?: Configuration): Promise<void>;
    findVariants(param: VariantApiFindVariantsRequest, options?: Configuration): Promise<Array<Variant>>;
    putVariant(param: VariantApiPutVariantRequest, options?: Configuration): Promise<Variant>;
}
