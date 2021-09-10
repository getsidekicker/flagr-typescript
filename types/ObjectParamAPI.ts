import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Constraint } from '../models/Constraint';
import { CreateConstraintRequest } from '../models/CreateConstraintRequest';
import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { CreateSegmentRequest } from '../models/CreateSegmentRequest';
import { CreateTagRequest } from '../models/CreateTagRequest';
import { CreateVariantRequest } from '../models/CreateVariantRequest';
import { Distribution } from '../models/Distribution';
import { EvalContext } from '../models/EvalContext';
import { EvalDebugLog } from '../models/EvalDebugLog';
import { EvalResult } from '../models/EvalResult';
import { EvaluationBatchRequest } from '../models/EvaluationBatchRequest';
import { EvaluationBatchResponse } from '../models/EvaluationBatchResponse';
import { EvaluationEntity } from '../models/EvaluationEntity';
import { Flag } from '../models/Flag';
import { FlagSnapshot } from '../models/FlagSnapshot';
import { Health } from '../models/Health';
import { ModelError } from '../models/ModelError';
import { PutDistributionsRequest } from '../models/PutDistributionsRequest';
import { PutFlagRequest } from '../models/PutFlagRequest';
import { PutSegmentReorderRequest } from '../models/PutSegmentReorderRequest';
import { PutSegmentRequest } from '../models/PutSegmentRequest';
import { PutVariantRequest } from '../models/PutVariantRequest';
import { Segment } from '../models/Segment';
import { SegmentDebugLog } from '../models/SegmentDebugLog';
import { SetFlagEnabledRequest } from '../models/SetFlagEnabledRequest';
import { Tag } from '../models/Tag';
import { Variant } from '../models/Variant';

import { ObservableConstraintApi } from "./ObservableAPI";
import { ConstraintApiRequestFactory, ConstraintApiResponseProcessor} from "../apis/ConstraintApi";

export interface ConstraintApiCreateConstraintRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof ConstraintApicreateConstraint
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof ConstraintApicreateConstraint
     */
    segmentID: number
    /**
     * create a constraint
     * @type CreateConstraintRequest
     * @memberof ConstraintApicreateConstraint
     */
    body: CreateConstraintRequest
}

export interface ConstraintApiDeleteConstraintRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof ConstraintApideleteConstraint
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof ConstraintApideleteConstraint
     */
    segmentID: number
    /**
     * numeric ID of the constraint
     * @type number
     * @memberof ConstraintApideleteConstraint
     */
    constraintID: number
}

export interface ConstraintApiFindConstraintsRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof ConstraintApifindConstraints
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof ConstraintApifindConstraints
     */
    segmentID: number
}

export interface ConstraintApiPutConstraintRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof ConstraintApiputConstraint
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof ConstraintApiputConstraint
     */
    segmentID: number
    /**
     * numeric ID of the constraint
     * @type number
     * @memberof ConstraintApiputConstraint
     */
    constraintID: number
    /**
     * create a constraint
     * @type CreateConstraintRequest
     * @memberof ConstraintApiputConstraint
     */
    body: CreateConstraintRequest
}

export class ObjectConstraintApi {
    private api: ObservableConstraintApi

    public constructor(configuration: Configuration, requestFactory?: ConstraintApiRequestFactory, responseProcessor?: ConstraintApiResponseProcessor) {
        this.api = new ObservableConstraintApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createConstraint(param: ConstraintApiCreateConstraintRequest, options?: Configuration): Promise<Constraint> {
        return this.api.createConstraint(param.flagID, param.segmentID, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteConstraint(param: ConstraintApiDeleteConstraintRequest, options?: Configuration): Promise<void> {
        return this.api.deleteConstraint(param.flagID, param.segmentID, param.constraintID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public findConstraints(param: ConstraintApiFindConstraintsRequest, options?: Configuration): Promise<Array<Constraint>> {
        return this.api.findConstraints(param.flagID, param.segmentID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putConstraint(param: ConstraintApiPutConstraintRequest, options?: Configuration): Promise<Constraint> {
        return this.api.putConstraint(param.flagID, param.segmentID, param.constraintID, param.body,  options).toPromise();
    }

}

import { ObservableDistributionApi } from "./ObservableAPI";
import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";

export interface DistributionApiFindDistributionsRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof DistributionApifindDistributions
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof DistributionApifindDistributions
     */
    segmentID: number
}

export interface DistributionApiPutDistributionsRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof DistributionApiputDistributions
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof DistributionApiputDistributions
     */
    segmentID: number
    /**
     * array of distributions
     * @type PutDistributionsRequest
     * @memberof DistributionApiputDistributions
     */
    body: PutDistributionsRequest
}

export class ObjectDistributionApi {
    private api: ObservableDistributionApi

    public constructor(configuration: Configuration, requestFactory?: DistributionApiRequestFactory, responseProcessor?: DistributionApiResponseProcessor) {
        this.api = new ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public findDistributions(param: DistributionApiFindDistributionsRequest, options?: Configuration): Promise<Array<Distribution>> {
        return this.api.findDistributions(param.flagID, param.segmentID,  options).toPromise();
    }

    /**
     * replace the distribution with the new setting
     * @param param the request object
     */
    public putDistributions(param: DistributionApiPutDistributionsRequest, options?: Configuration): Promise<Array<Distribution>> {
        return this.api.putDistributions(param.flagID, param.segmentID, param.body,  options).toPromise();
    }

}

import { ObservableEvaluationApi } from "./ObservableAPI";
import { EvaluationApiRequestFactory, EvaluationApiResponseProcessor} from "../apis/EvaluationApi";

export interface EvaluationApiPostEvaluationRequest {
    /**
     * evalution context
     * @type EvalContext
     * @memberof EvaluationApipostEvaluation
     */
    body: EvalContext
}

export interface EvaluationApiPostEvaluationBatchRequest {
    /**
     * evalution batch request
     * @type EvaluationBatchRequest
     * @memberof EvaluationApipostEvaluationBatch
     */
    body: EvaluationBatchRequest
}

export class ObjectEvaluationApi {
    private api: ObservableEvaluationApi

    public constructor(configuration: Configuration, requestFactory?: EvaluationApiRequestFactory, responseProcessor?: EvaluationApiResponseProcessor) {
        this.api = new ObservableEvaluationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public postEvaluation(param: EvaluationApiPostEvaluationRequest, options?: Configuration): Promise<EvalResult> {
        return this.api.postEvaluation(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postEvaluationBatch(param: EvaluationApiPostEvaluationBatchRequest, options?: Configuration): Promise<EvaluationBatchResponse> {
        return this.api.postEvaluationBatch(param.body,  options).toPromise();
    }

}

import { ObservableExportApi } from "./ObservableAPI";
import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi";

export interface ExportApiGetExportEvalCacheJSONRequest {
}

export interface ExportApiGetExportSqliteRequest {
    /**
     * export without snapshots data - useful for smaller db without snapshots 
     * @type boolean
     * @memberof ExportApigetExportSqlite
     */
    excludeSnapshots?: boolean
}

export class ObjectExportApi {
    private api: ObservableExportApi

    public constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor) {
        this.api = new ObservableExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export JSON format of the eval cache dump
     * @param param the request object
     */
    public getExportEvalCacheJSON(param: ExportApiGetExportEvalCacheJSONRequest, options?: Configuration): Promise<any> {
        return this.api.getExportEvalCacheJSON( options).toPromise();
    }

    /**
     * Export sqlite3 format of the db dump, which is converted from the main database.
     * @param param the request object
     */
    public getExportSqlite(param: ExportApiGetExportSqliteRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.getExportSqlite(param.excludeSnapshots,  options).toPromise();
    }

}

import { ObservableFlagApi } from "./ObservableAPI";
import { FlagApiRequestFactory, FlagApiResponseProcessor} from "../apis/FlagApi";

export interface FlagApiCreateFlagRequest {
    /**
     * create a flag
     * @type CreateFlagRequest
     * @memberof FlagApicreateFlag
     */
    body: CreateFlagRequest
}

export interface FlagApiDeleteFlagRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof FlagApideleteFlag
     */
    flagID: number
}

export interface FlagApiFindFlagsRequest {
    /**
     * the numbers of flags to return
     * @type number
     * @memberof FlagApifindFlags
     */
    limit?: number
    /**
     * return flags having given enabled status
     * @type boolean
     * @memberof FlagApifindFlags
     */
    enabled?: boolean
    /**
     * return flags exactly matching given description
     * @type string
     * @memberof FlagApifindFlags
     */
    description?: string
    /**
     * return flags with the given tags (comma separated)
     * @type string
     * @memberof FlagApifindFlags
     */
    tags?: string
    /**
     * return flags partially matching given description
     * @type string
     * @memberof FlagApifindFlags
     */
    descriptionLike?: string
    /**
     * return flags matching given key
     * @type string
     * @memberof FlagApifindFlags
     */
    key?: string
    /**
     * return flags given the offset, it should usually set together with limit
     * @type number
     * @memberof FlagApifindFlags
     */
    offset?: number
    /**
     * return flags with preloaded segments and variants
     * @type boolean
     * @memberof FlagApifindFlags
     */
    preload?: boolean
    /**
     * return all deleted flags
     * @type boolean
     * @memberof FlagApifindFlags
     */
    deleted?: boolean
}

export interface FlagApiGetFlagRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof FlagApigetFlag
     */
    flagID: number
}

export interface FlagApiGetFlagEntityTypesRequest {
}

export interface FlagApiGetFlagSnapshotsRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof FlagApigetFlagSnapshots
     */
    flagID: number
}

export interface FlagApiPutFlagRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof FlagApiputFlag
     */
    flagID: number
    /**
     * update a flag
     * @type PutFlagRequest
     * @memberof FlagApiputFlag
     */
    body: PutFlagRequest
}

export interface FlagApiRestoreFlagRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof FlagApirestoreFlag
     */
    flagID: number
}

export interface FlagApiSetFlagEnabledRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof FlagApisetFlagEnabled
     */
    flagID: number
    /**
     * set flag enabled state
     * @type SetFlagEnabledRequest
     * @memberof FlagApisetFlagEnabled
     */
    body: SetFlagEnabledRequest
}

export class ObjectFlagApi {
    private api: ObservableFlagApi

    public constructor(configuration: Configuration, requestFactory?: FlagApiRequestFactory, responseProcessor?: FlagApiResponseProcessor) {
        this.api = new ObservableFlagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createFlag(param: FlagApiCreateFlagRequest, options?: Configuration): Promise<Flag> {
        return this.api.createFlag(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFlag(param: FlagApiDeleteFlagRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFlag(param.flagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public findFlags(param: FlagApiFindFlagsRequest, options?: Configuration): Promise<Array<Flag>> {
        return this.api.findFlags(param.limit, param.enabled, param.description, param.tags, param.descriptionLike, param.key, param.offset, param.preload, param.deleted,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlag(param: FlagApiGetFlagRequest, options?: Configuration): Promise<Flag> {
        return this.api.getFlag(param.flagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlagEntityTypes(param: FlagApiGetFlagEntityTypesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getFlagEntityTypes( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlagSnapshots(param: FlagApiGetFlagSnapshotsRequest, options?: Configuration): Promise<Array<FlagSnapshot>> {
        return this.api.getFlagSnapshots(param.flagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putFlag(param: FlagApiPutFlagRequest, options?: Configuration): Promise<Flag> {
        return this.api.putFlag(param.flagID, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public restoreFlag(param: FlagApiRestoreFlagRequest, options?: Configuration): Promise<Flag> {
        return this.api.restoreFlag(param.flagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public setFlagEnabled(param: FlagApiSetFlagEnabledRequest, options?: Configuration): Promise<Flag> {
        return this.api.setFlagEnabled(param.flagID, param.body,  options).toPromise();
    }

}

import { ObservableHealthApi } from "./ObservableAPI";
import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";

export interface HealthApiGetHealthRequest {
}

export class ObjectHealthApi {
    private api: ObservableHealthApi

    public constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if Flagr is healthy
     * @param param the request object
     */
    public getHealth(param: HealthApiGetHealthRequest, options?: Configuration): Promise<Health> {
        return this.api.getHealth( options).toPromise();
    }

}

import { ObservableSegmentApi } from "./ObservableAPI";
import { SegmentApiRequestFactory, SegmentApiResponseProcessor} from "../apis/SegmentApi";

export interface SegmentApiCreateSegmentRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof SegmentApicreateSegment
     */
    flagID: number
    /**
     * create a segment under a flag
     * @type CreateSegmentRequest
     * @memberof SegmentApicreateSegment
     */
    body: CreateSegmentRequest
}

export interface SegmentApiDeleteSegmentRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof SegmentApideleteSegment
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof SegmentApideleteSegment
     */
    segmentID: number
}

export interface SegmentApiFindSegmentsRequest {
    /**
     * numeric ID of the flag to get
     * @type number
     * @memberof SegmentApifindSegments
     */
    flagID: number
}

export interface SegmentApiPutSegmentRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof SegmentApiputSegment
     */
    flagID: number
    /**
     * numeric ID of the segment
     * @type number
     * @memberof SegmentApiputSegment
     */
    segmentID: number
    /**
     * update a segment
     * @type PutSegmentRequest
     * @memberof SegmentApiputSegment
     */
    body: PutSegmentRequest
}

export interface SegmentApiPutSegmentsReorderRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof SegmentApiputSegmentsReorder
     */
    flagID: number
    /**
     * reorder segments
     * @type PutSegmentReorderRequest
     * @memberof SegmentApiputSegmentsReorder
     */
    body: PutSegmentReorderRequest
}

export class ObjectSegmentApi {
    private api: ObservableSegmentApi

    public constructor(configuration: Configuration, requestFactory?: SegmentApiRequestFactory, responseProcessor?: SegmentApiResponseProcessor) {
        this.api = new ObservableSegmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createSegment(param: SegmentApiCreateSegmentRequest, options?: Configuration): Promise<Segment> {
        return this.api.createSegment(param.flagID, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteSegment(param: SegmentApiDeleteSegmentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSegment(param.flagID, param.segmentID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public findSegments(param: SegmentApiFindSegmentsRequest, options?: Configuration): Promise<Array<Segment>> {
        return this.api.findSegments(param.flagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putSegment(param: SegmentApiPutSegmentRequest, options?: Configuration): Promise<Segment> {
        return this.api.putSegment(param.flagID, param.segmentID, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putSegmentsReorder(param: SegmentApiPutSegmentsReorderRequest, options?: Configuration): Promise<void> {
        return this.api.putSegmentsReorder(param.flagID, param.body,  options).toPromise();
    }

}

import { ObservableTagApi } from "./ObservableAPI";
import { TagApiRequestFactory, TagApiResponseProcessor} from "../apis/TagApi";

export interface TagApiCreateTagRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof TagApicreateTag
     */
    flagID: number
    /**
     * create a tag
     * @type CreateTagRequest
     * @memberof TagApicreateTag
     */
    body: CreateTagRequest
}

export interface TagApiDeleteTagRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof TagApideleteTag
     */
    flagID: number
    /**
     * numeric ID of the tag
     * @type number
     * @memberof TagApideleteTag
     */
    tagID: number
}

export interface TagApiFindAllTagsRequest {
    /**
     * the numbers of tags to return
     * @type number
     * @memberof TagApifindAllTags
     */
    limit?: number
    /**
     * return tags given the offset, it should usually set together with limit
     * @type number
     * @memberof TagApifindAllTags
     */
    offset?: number
    /**
     * return tags partially matching given value
     * @type string
     * @memberof TagApifindAllTags
     */
    valueLike?: string
}

export interface TagApiFindTagsRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof TagApifindTags
     */
    flagID: number
}

export class ObjectTagApi {
    private api: ObservableTagApi

    public constructor(configuration: Configuration, requestFactory?: TagApiRequestFactory, responseProcessor?: TagApiResponseProcessor) {
        this.api = new ObservableTagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createTag(param: TagApiCreateTagRequest, options?: Configuration): Promise<Tag> {
        return this.api.createTag(param.flagID, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTag(param: TagApiDeleteTagRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTag(param.flagID, param.tagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public findAllTags(param: TagApiFindAllTagsRequest, options?: Configuration): Promise<Array<Tag>> {
        return this.api.findAllTags(param.limit, param.offset, param.valueLike,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public findTags(param: TagApiFindTagsRequest, options?: Configuration): Promise<Array<Tag>> {
        return this.api.findTags(param.flagID,  options).toPromise();
    }

}

import { ObservableVariantApi } from "./ObservableAPI";
import { VariantApiRequestFactory, VariantApiResponseProcessor} from "../apis/VariantApi";

export interface VariantApiCreateVariantRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof VariantApicreateVariant
     */
    flagID: number
    /**
     * create a variant
     * @type CreateVariantRequest
     * @memberof VariantApicreateVariant
     */
    body: CreateVariantRequest
}

export interface VariantApiDeleteVariantRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof VariantApideleteVariant
     */
    flagID: number
    /**
     * numeric ID of the variant
     * @type number
     * @memberof VariantApideleteVariant
     */
    variantID: number
}

export interface VariantApiFindVariantsRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof VariantApifindVariants
     */
    flagID: number
}

export interface VariantApiPutVariantRequest {
    /**
     * numeric ID of the flag
     * @type number
     * @memberof VariantApiputVariant
     */
    flagID: number
    /**
     * numeric ID of the variant
     * @type number
     * @memberof VariantApiputVariant
     */
    variantID: number
    /**
     * update a variant
     * @type PutVariantRequest
     * @memberof VariantApiputVariant
     */
    body: PutVariantRequest
}

export class ObjectVariantApi {
    private api: ObservableVariantApi

    public constructor(configuration: Configuration, requestFactory?: VariantApiRequestFactory, responseProcessor?: VariantApiResponseProcessor) {
        this.api = new ObservableVariantApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createVariant(param: VariantApiCreateVariantRequest, options?: Configuration): Promise<Variant> {
        return this.api.createVariant(param.flagID, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteVariant(param: VariantApiDeleteVariantRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVariant(param.flagID, param.variantID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public findVariants(param: VariantApiFindVariantsRequest, options?: Configuration): Promise<Array<Variant>> {
        return this.api.findVariants(param.flagID,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putVariant(param: VariantApiPutVariantRequest, options?: Configuration): Promise<Variant> {
        return this.api.putVariant(param.flagID, param.variantID, param.body,  options).toPromise();
    }

}
