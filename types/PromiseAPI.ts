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
import { ObservableConstraintApi } from './ObservableAPI';

import { ConstraintApiRequestFactory, ConstraintApiResponseProcessor} from "../apis/ConstraintApi";
export class PromiseConstraintApi {
    private api: ObservableConstraintApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConstraintApiRequestFactory,
        responseProcessor?: ConstraintApiResponseProcessor
    ) {
        this.api = new ObservableConstraintApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body create a constraint
     */
    public createConstraint(flagID: number, segmentID: number, body: CreateConstraintRequest, _options?: Configuration): Promise<Constraint> {
        const result = this.api.createConstraint(flagID, segmentID, body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param constraintID numeric ID of the constraint
     */
    public deleteConstraint(flagID: number, segmentID: number, constraintID: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteConstraint(flagID, segmentID, constraintID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public findConstraints(flagID: number, segmentID: number, _options?: Configuration): Promise<Array<Constraint>> {
        const result = this.api.findConstraints(flagID, segmentID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param constraintID numeric ID of the constraint
     * @param body create a constraint
     */
    public putConstraint(flagID: number, segmentID: number, constraintID: number, body: CreateConstraintRequest, _options?: Configuration): Promise<Constraint> {
        const result = this.api.putConstraint(flagID, segmentID, constraintID, body, _options);
        return result.toPromise();
    }


}



import { ObservableDistributionApi } from './ObservableAPI';

import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";
export class PromiseDistributionApi {
    private api: ObservableDistributionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionApiRequestFactory,
        responseProcessor?: DistributionApiResponseProcessor
    ) {
        this.api = new ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public findDistributions(flagID: number, segmentID: number, _options?: Configuration): Promise<Array<Distribution>> {
        const result = this.api.findDistributions(flagID, segmentID, _options);
        return result.toPromise();
    }

    /**
     * replace the distribution with the new setting
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body array of distributions
     */
    public putDistributions(flagID: number, segmentID: number, body: PutDistributionsRequest, _options?: Configuration): Promise<Array<Distribution>> {
        const result = this.api.putDistributions(flagID, segmentID, body, _options);
        return result.toPromise();
    }


}



import { ObservableEvaluationApi } from './ObservableAPI';

import { EvaluationApiRequestFactory, EvaluationApiResponseProcessor} from "../apis/EvaluationApi";
export class PromiseEvaluationApi {
    private api: ObservableEvaluationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EvaluationApiRequestFactory,
        responseProcessor?: EvaluationApiResponseProcessor
    ) {
        this.api = new ObservableEvaluationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body evalution context
     */
    public postEvaluation(body: EvalContext, _options?: Configuration): Promise<EvalResult> {
        const result = this.api.postEvaluation(body, _options);
        return result.toPromise();
    }

    /**
     * @param body evalution batch request
     */
    public postEvaluationBatch(body: EvaluationBatchRequest, _options?: Configuration): Promise<EvaluationBatchResponse> {
        const result = this.api.postEvaluationBatch(body, _options);
        return result.toPromise();
    }


}



import { ObservableExportApi } from './ObservableAPI';

import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi";
export class PromiseExportApi {
    private api: ObservableExportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportApiRequestFactory,
        responseProcessor?: ExportApiResponseProcessor
    ) {
        this.api = new ObservableExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export JSON format of the eval cache dump
     */
    public getExportEvalCacheJSON(_options?: Configuration): Promise<any> {
        const result = this.api.getExportEvalCacheJSON(_options);
        return result.toPromise();
    }

    /**
     * Export sqlite3 format of the db dump, which is converted from the main database.
     * @param excludeSnapshots export without snapshots data - useful for smaller db without snapshots 
     */
    public getExportSqlite(excludeSnapshots?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.getExportSqlite(excludeSnapshots, _options);
        return result.toPromise();
    }


}



import { ObservableFlagApi } from './ObservableAPI';

import { FlagApiRequestFactory, FlagApiResponseProcessor} from "../apis/FlagApi";
export class PromiseFlagApi {
    private api: ObservableFlagApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FlagApiRequestFactory,
        responseProcessor?: FlagApiResponseProcessor
    ) {
        this.api = new ObservableFlagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body create a flag
     */
    public createFlag(body: CreateFlagRequest, _options?: Configuration): Promise<Flag> {
        const result = this.api.createFlag(body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     */
    public deleteFlag(flagID: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFlag(flagID, _options);
        return result.toPromise();
    }

    /**
     * @param limit the numbers of flags to return
     * @param enabled return flags having given enabled status
     * @param description return flags exactly matching given description
     * @param tags return flags with the given tags (comma separated)
     * @param descriptionLike return flags partially matching given description
     * @param key return flags matching given key
     * @param offset return flags given the offset, it should usually set together with limit
     * @param preload return flags with preloaded segments and variants
     * @param deleted return all deleted flags
     */
    public findFlags(limit?: number, enabled?: boolean, description?: string, tags?: string, descriptionLike?: string, key?: string, offset?: number, preload?: boolean, deleted?: boolean, _options?: Configuration): Promise<Array<Flag>> {
        const result = this.api.findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public getFlag(flagID: number, _options?: Configuration): Promise<Flag> {
        const result = this.api.getFlag(flagID, _options);
        return result.toPromise();
    }

    /**
     */
    public getFlagEntityTypes(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.getFlagEntityTypes(_options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public getFlagSnapshots(flagID: number, _options?: Configuration): Promise<Array<FlagSnapshot>> {
        const result = this.api.getFlagSnapshots(flagID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag to get
     * @param body update a flag
     */
    public putFlag(flagID: number, body: PutFlagRequest, _options?: Configuration): Promise<Flag> {
        const result = this.api.putFlag(flagID, body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public restoreFlag(flagID: number, _options?: Configuration): Promise<Flag> {
        const result = this.api.restoreFlag(flagID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag to get
     * @param body set flag enabled state
     */
    public setFlagEnabled(flagID: number, body: SetFlagEnabledRequest, _options?: Configuration): Promise<Flag> {
        const result = this.api.setFlagEnabled(flagID, body, _options);
        return result.toPromise();
    }


}



import { ObservableHealthApi } from './ObservableAPI';

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class PromiseHealthApi {
    private api: ObservableHealthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if Flagr is healthy
     */
    public getHealth(_options?: Configuration): Promise<Health> {
        const result = this.api.getHealth(_options);
        return result.toPromise();
    }


}



import { ObservableSegmentApi } from './ObservableAPI';

import { SegmentApiRequestFactory, SegmentApiResponseProcessor} from "../apis/SegmentApi";
export class PromiseSegmentApi {
    private api: ObservableSegmentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SegmentApiRequestFactory,
        responseProcessor?: SegmentApiResponseProcessor
    ) {
        this.api = new ObservableSegmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param flagID numeric ID of the flag to get
     * @param body create a segment under a flag
     */
    public createSegment(flagID: number, body: CreateSegmentRequest, _options?: Configuration): Promise<Segment> {
        const result = this.api.createSegment(flagID, body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public deleteSegment(flagID: number, segmentID: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSegment(flagID, segmentID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag to get
     */
    public findSegments(flagID: number, _options?: Configuration): Promise<Array<Segment>> {
        const result = this.api.findSegments(flagID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body update a segment
     */
    public putSegment(flagID: number, segmentID: number, body: PutSegmentRequest, _options?: Configuration): Promise<Segment> {
        const result = this.api.putSegment(flagID, segmentID, body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param body reorder segments
     */
    public putSegmentsReorder(flagID: number, body: PutSegmentReorderRequest, _options?: Configuration): Promise<void> {
        const result = this.api.putSegmentsReorder(flagID, body, _options);
        return result.toPromise();
    }


}



import { ObservableTagApi } from './ObservableAPI';

import { TagApiRequestFactory, TagApiResponseProcessor} from "../apis/TagApi";
export class PromiseTagApi {
    private api: ObservableTagApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagApiRequestFactory,
        responseProcessor?: TagApiResponseProcessor
    ) {
        this.api = new ObservableTagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param flagID numeric ID of the flag
     * @param body create a tag
     */
    public createTag(flagID: number, body: CreateTagRequest, _options?: Configuration): Promise<Tag> {
        const result = this.api.createTag(flagID, body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param tagID numeric ID of the tag
     */
    public deleteTag(flagID: number, tagID: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTag(flagID, tagID, _options);
        return result.toPromise();
    }

    /**
     * @param limit the numbers of tags to return
     * @param offset return tags given the offset, it should usually set together with limit
     * @param valueLike return tags partially matching given value
     */
    public findAllTags(limit?: number, offset?: number, valueLike?: string, _options?: Configuration): Promise<Array<Tag>> {
        const result = this.api.findAllTags(limit, offset, valueLike, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     */
    public findTags(flagID: number, _options?: Configuration): Promise<Array<Tag>> {
        const result = this.api.findTags(flagID, _options);
        return result.toPromise();
    }


}



import { ObservableVariantApi } from './ObservableAPI';

import { VariantApiRequestFactory, VariantApiResponseProcessor} from "../apis/VariantApi";
export class PromiseVariantApi {
    private api: ObservableVariantApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VariantApiRequestFactory,
        responseProcessor?: VariantApiResponseProcessor
    ) {
        this.api = new ObservableVariantApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param flagID numeric ID of the flag
     * @param body create a variant
     */
    public createVariant(flagID: number, body: CreateVariantRequest, _options?: Configuration): Promise<Variant> {
        const result = this.api.createVariant(flagID, body, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param variantID numeric ID of the variant
     */
    public deleteVariant(flagID: number, variantID: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteVariant(flagID, variantID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     */
    public findVariants(flagID: number, _options?: Configuration): Promise<Array<Variant>> {
        const result = this.api.findVariants(flagID, _options);
        return result.toPromise();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param variantID numeric ID of the variant
     * @param body update a variant
     */
    public putVariant(flagID: number, variantID: number, body: PutVariantRequest, _options?: Configuration): Promise<Variant> {
        const result = this.api.putVariant(flagID, variantID, body, _options);
        return result.toPromise();
    }


}



