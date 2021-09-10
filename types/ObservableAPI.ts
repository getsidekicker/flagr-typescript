import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ConstraintApiRequestFactory, ConstraintApiResponseProcessor} from "../apis/ConstraintApi";
export class ObservableConstraintApi {
    private requestFactory: ConstraintApiRequestFactory;
    private responseProcessor: ConstraintApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConstraintApiRequestFactory,
        responseProcessor?: ConstraintApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConstraintApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConstraintApiResponseProcessor();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body create a constraint
     */
    public createConstraint(flagID: number, segmentID: number, body: CreateConstraintRequest, _options?: Configuration): Observable<Constraint> {
        const requestContextPromise = this.requestFactory.createConstraint(flagID, segmentID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConstraint(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param constraintID numeric ID of the constraint
     */
    public deleteConstraint(flagID: number, segmentID: number, constraintID: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteConstraint(flagID, segmentID, constraintID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConstraint(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public findConstraints(flagID: number, segmentID: number, _options?: Configuration): Observable<Array<Constraint>> {
        const requestContextPromise = this.requestFactory.findConstraints(flagID, segmentID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findConstraints(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param constraintID numeric ID of the constraint
     * @param body create a constraint
     */
    public putConstraint(flagID: number, segmentID: number, constraintID: number, body: CreateConstraintRequest, _options?: Configuration): Observable<Constraint> {
        const requestContextPromise = this.requestFactory.putConstraint(flagID, segmentID, constraintID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putConstraint(rsp)));
            }));
    }
 
}

import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";
export class ObservableDistributionApi {
    private requestFactory: DistributionApiRequestFactory;
    private responseProcessor: DistributionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionApiRequestFactory,
        responseProcessor?: DistributionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DistributionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DistributionApiResponseProcessor();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public findDistributions(flagID: number, segmentID: number, _options?: Configuration): Observable<Array<Distribution>> {
        const requestContextPromise = this.requestFactory.findDistributions(flagID, segmentID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findDistributions(rsp)));
            }));
    }
 
    /**
     * replace the distribution with the new setting
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body array of distributions
     */
    public putDistributions(flagID: number, segmentID: number, body: PutDistributionsRequest, _options?: Configuration): Observable<Array<Distribution>> {
        const requestContextPromise = this.requestFactory.putDistributions(flagID, segmentID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putDistributions(rsp)));
            }));
    }
 
}

import { EvaluationApiRequestFactory, EvaluationApiResponseProcessor} from "../apis/EvaluationApi";
export class ObservableEvaluationApi {
    private requestFactory: EvaluationApiRequestFactory;
    private responseProcessor: EvaluationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EvaluationApiRequestFactory,
        responseProcessor?: EvaluationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvaluationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvaluationApiResponseProcessor();
    }

    /**
     * @param body evalution context
     */
    public postEvaluation(body: EvalContext, _options?: Configuration): Observable<EvalResult> {
        const requestContextPromise = this.requestFactory.postEvaluation(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postEvaluation(rsp)));
            }));
    }
 
    /**
     * @param body evalution batch request
     */
    public postEvaluationBatch(body: EvaluationBatchRequest, _options?: Configuration): Observable<EvaluationBatchResponse> {
        const requestContextPromise = this.requestFactory.postEvaluationBatch(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postEvaluationBatch(rsp)));
            }));
    }
 
}

import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi";
export class ObservableExportApi {
    private requestFactory: ExportApiRequestFactory;
    private responseProcessor: ExportApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportApiRequestFactory,
        responseProcessor?: ExportApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportApiResponseProcessor();
    }

    /**
     * Export JSON format of the eval cache dump
     */
    public getExportEvalCacheJSON(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getExportEvalCacheJSON(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportEvalCacheJSON(rsp)));
            }));
    }
 
    /**
     * Export sqlite3 format of the db dump, which is converted from the main database.
     * @param excludeSnapshots export without snapshots data - useful for smaller db without snapshots 
     */
    public getExportSqlite(excludeSnapshots?: boolean, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.getExportSqlite(excludeSnapshots, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportSqlite(rsp)));
            }));
    }
 
}

import { FlagApiRequestFactory, FlagApiResponseProcessor} from "../apis/FlagApi";
export class ObservableFlagApi {
    private requestFactory: FlagApiRequestFactory;
    private responseProcessor: FlagApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FlagApiRequestFactory,
        responseProcessor?: FlagApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FlagApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FlagApiResponseProcessor();
    }

    /**
     * @param body create a flag
     */
    public createFlag(body: CreateFlagRequest, _options?: Configuration): Observable<Flag> {
        const requestContextPromise = this.requestFactory.createFlag(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFlag(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     */
    public deleteFlag(flagID: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteFlag(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFlag(rsp)));
            }));
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
    public findFlags(limit?: number, enabled?: boolean, description?: string, tags?: string, descriptionLike?: string, key?: string, offset?: number, preload?: boolean, deleted?: boolean, _options?: Configuration): Observable<Array<Flag>> {
        const requestContextPromise = this.requestFactory.findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findFlags(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag to get
     */
    public getFlag(flagID: number, _options?: Configuration): Observable<Flag> {
        const requestContextPromise = this.requestFactory.getFlag(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFlag(rsp)));
            }));
    }
 
    /**
     */
    public getFlagEntityTypes(_options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.getFlagEntityTypes(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFlagEntityTypes(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag to get
     */
    public getFlagSnapshots(flagID: number, _options?: Configuration): Observable<Array<FlagSnapshot>> {
        const requestContextPromise = this.requestFactory.getFlagSnapshots(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFlagSnapshots(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag to get
     * @param body update a flag
     */
    public putFlag(flagID: number, body: PutFlagRequest, _options?: Configuration): Observable<Flag> {
        const requestContextPromise = this.requestFactory.putFlag(flagID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putFlag(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag to get
     */
    public restoreFlag(flagID: number, _options?: Configuration): Observable<Flag> {
        const requestContextPromise = this.requestFactory.restoreFlag(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreFlag(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag to get
     * @param body set flag enabled state
     */
    public setFlagEnabled(flagID: number, body: SetFlagEnabledRequest, _options?: Configuration): Observable<Flag> {
        const requestContextPromise = this.requestFactory.setFlagEnabled(flagID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setFlagEnabled(rsp)));
            }));
    }
 
}

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class ObservableHealthApi {
    private requestFactory: HealthApiRequestFactory;
    private responseProcessor: HealthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthApiResponseProcessor();
    }

    /**
     * Check if Flagr is healthy
     */
    public getHealth(_options?: Configuration): Observable<Health> {
        const requestContextPromise = this.requestFactory.getHealth(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHealth(rsp)));
            }));
    }
 
}

import { SegmentApiRequestFactory, SegmentApiResponseProcessor} from "../apis/SegmentApi";
export class ObservableSegmentApi {
    private requestFactory: SegmentApiRequestFactory;
    private responseProcessor: SegmentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SegmentApiRequestFactory,
        responseProcessor?: SegmentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SegmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SegmentApiResponseProcessor();
    }

    /**
     * @param flagID numeric ID of the flag to get
     * @param body create a segment under a flag
     */
    public createSegment(flagID: number, body: CreateSegmentRequest, _options?: Configuration): Observable<Segment> {
        const requestContextPromise = this.requestFactory.createSegment(flagID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSegment(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     */
    public deleteSegment(flagID: number, segmentID: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSegment(flagID, segmentID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSegment(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag to get
     */
    public findSegments(flagID: number, _options?: Configuration): Observable<Array<Segment>> {
        const requestContextPromise = this.requestFactory.findSegments(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findSegments(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param segmentID numeric ID of the segment
     * @param body update a segment
     */
    public putSegment(flagID: number, segmentID: number, body: PutSegmentRequest, _options?: Configuration): Observable<Segment> {
        const requestContextPromise = this.requestFactory.putSegment(flagID, segmentID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putSegment(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param body reorder segments
     */
    public putSegmentsReorder(flagID: number, body: PutSegmentReorderRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.putSegmentsReorder(flagID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putSegmentsReorder(rsp)));
            }));
    }
 
}

import { TagApiRequestFactory, TagApiResponseProcessor} from "../apis/TagApi";
export class ObservableTagApi {
    private requestFactory: TagApiRequestFactory;
    private responseProcessor: TagApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagApiRequestFactory,
        responseProcessor?: TagApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagApiResponseProcessor();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param body create a tag
     */
    public createTag(flagID: number, body: CreateTagRequest, _options?: Configuration): Observable<Tag> {
        const requestContextPromise = this.requestFactory.createTag(flagID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTag(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param tagID numeric ID of the tag
     */
    public deleteTag(flagID: number, tagID: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTag(flagID, tagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTag(rsp)));
            }));
    }
 
    /**
     * @param limit the numbers of tags to return
     * @param offset return tags given the offset, it should usually set together with limit
     * @param valueLike return tags partially matching given value
     */
    public findAllTags(limit?: number, offset?: number, valueLike?: string, _options?: Configuration): Observable<Array<Tag>> {
        const requestContextPromise = this.requestFactory.findAllTags(limit, offset, valueLike, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findAllTags(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     */
    public findTags(flagID: number, _options?: Configuration): Observable<Array<Tag>> {
        const requestContextPromise = this.requestFactory.findTags(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findTags(rsp)));
            }));
    }
 
}

import { VariantApiRequestFactory, VariantApiResponseProcessor} from "../apis/VariantApi";
export class ObservableVariantApi {
    private requestFactory: VariantApiRequestFactory;
    private responseProcessor: VariantApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VariantApiRequestFactory,
        responseProcessor?: VariantApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VariantApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VariantApiResponseProcessor();
    }

    /**
     * @param flagID numeric ID of the flag
     * @param body create a variant
     */
    public createVariant(flagID: number, body: CreateVariantRequest, _options?: Configuration): Observable<Variant> {
        const requestContextPromise = this.requestFactory.createVariant(flagID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVariant(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param variantID numeric ID of the variant
     */
    public deleteVariant(flagID: number, variantID: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteVariant(flagID, variantID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVariant(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     */
    public findVariants(flagID: number, _options?: Configuration): Observable<Array<Variant>> {
        const requestContextPromise = this.requestFactory.findVariants(flagID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findVariants(rsp)));
            }));
    }
 
    /**
     * @param flagID numeric ID of the flag
     * @param variantID numeric ID of the variant
     * @param body update a variant
     */
    public putVariant(flagID: number, variantID: number, body: PutVariantRequest, _options?: Configuration): Observable<Variant> {
        const requestContextPromise = this.requestFactory.putVariant(flagID, variantID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putVariant(rsp)));
            }));
    }
 
}
