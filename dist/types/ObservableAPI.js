"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableVariantApi = exports.ObservableTagApi = exports.ObservableSegmentApi = exports.ObservableHealthApi = exports.ObservableFlagApi = exports.ObservableExportApi = exports.ObservableEvaluationApi = exports.ObservableDistributionApi = exports.ObservableConstraintApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const ConstraintApi_1 = require("../apis/ConstraintApi");
class ObservableConstraintApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConstraintApi_1.ConstraintApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConstraintApi_1.ConstraintApiResponseProcessor();
    }
    createConstraint(flagID, segmentID, body, _options) {
        const requestContextPromise = this.requestFactory.createConstraint(flagID, segmentID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.createConstraint(rsp)));
        }));
    }
    deleteConstraint(flagID, segmentID, constraintID, _options) {
        const requestContextPromise = this.requestFactory.deleteConstraint(flagID, segmentID, constraintID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.deleteConstraint(rsp)));
        }));
    }
    findConstraints(flagID, segmentID, _options) {
        const requestContextPromise = this.requestFactory.findConstraints(flagID, segmentID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findConstraints(rsp)));
        }));
    }
    putConstraint(flagID, segmentID, constraintID, body, _options) {
        const requestContextPromise = this.requestFactory.putConstraint(flagID, segmentID, constraintID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.putConstraint(rsp)));
        }));
    }
}
exports.ObservableConstraintApi = ObservableConstraintApi;
const DistributionApi_1 = require("../apis/DistributionApi");
class ObservableDistributionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DistributionApi_1.DistributionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DistributionApi_1.DistributionApiResponseProcessor();
    }
    findDistributions(flagID, segmentID, _options) {
        const requestContextPromise = this.requestFactory.findDistributions(flagID, segmentID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findDistributions(rsp)));
        }));
    }
    putDistributions(flagID, segmentID, body, _options) {
        const requestContextPromise = this.requestFactory.putDistributions(flagID, segmentID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.putDistributions(rsp)));
        }));
    }
}
exports.ObservableDistributionApi = ObservableDistributionApi;
const EvaluationApi_1 = require("../apis/EvaluationApi");
class ObservableEvaluationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvaluationApi_1.EvaluationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvaluationApi_1.EvaluationApiResponseProcessor();
    }
    postEvaluation(body, _options) {
        const requestContextPromise = this.requestFactory.postEvaluation(body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.postEvaluation(rsp)));
        }));
    }
    postEvaluationBatch(body, _options) {
        const requestContextPromise = this.requestFactory.postEvaluationBatch(body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.postEvaluationBatch(rsp)));
        }));
    }
}
exports.ObservableEvaluationApi = ObservableEvaluationApi;
const ExportApi_1 = require("../apis/ExportApi");
class ObservableExportApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportApi_1.ExportApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportApi_1.ExportApiResponseProcessor();
    }
    getExportEvalCacheJSON(_options) {
        const requestContextPromise = this.requestFactory.getExportEvalCacheJSON(_options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getExportEvalCacheJSON(rsp)));
        }));
    }
    getExportSqlite(excludeSnapshots, _options) {
        const requestContextPromise = this.requestFactory.getExportSqlite(excludeSnapshots, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getExportSqlite(rsp)));
        }));
    }
}
exports.ObservableExportApi = ObservableExportApi;
const FlagApi_1 = require("../apis/FlagApi");
class ObservableFlagApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FlagApi_1.FlagApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FlagApi_1.FlagApiResponseProcessor();
    }
    createFlag(body, _options) {
        const requestContextPromise = this.requestFactory.createFlag(body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.createFlag(rsp)));
        }));
    }
    deleteFlag(flagID, _options) {
        const requestContextPromise = this.requestFactory.deleteFlag(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.deleteFlag(rsp)));
        }));
    }
    findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options) {
        const requestContextPromise = this.requestFactory.findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findFlags(rsp)));
        }));
    }
    getFlag(flagID, _options) {
        const requestContextPromise = this.requestFactory.getFlag(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getFlag(rsp)));
        }));
    }
    getFlagEntityTypes(_options) {
        const requestContextPromise = this.requestFactory.getFlagEntityTypes(_options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getFlagEntityTypes(rsp)));
        }));
    }
    getFlagSnapshots(flagID, _options) {
        const requestContextPromise = this.requestFactory.getFlagSnapshots(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getFlagSnapshots(rsp)));
        }));
    }
    putFlag(flagID, body, _options) {
        const requestContextPromise = this.requestFactory.putFlag(flagID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.putFlag(rsp)));
        }));
    }
    restoreFlag(flagID, _options) {
        const requestContextPromise = this.requestFactory.restoreFlag(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.restoreFlag(rsp)));
        }));
    }
    setFlagEnabled(flagID, body, _options) {
        const requestContextPromise = this.requestFactory.setFlagEnabled(flagID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.setFlagEnabled(rsp)));
        }));
    }
}
exports.ObservableFlagApi = ObservableFlagApi;
const HealthApi_1 = require("../apis/HealthApi");
class ObservableHealthApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthApi_1.HealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthApi_1.HealthApiResponseProcessor();
    }
    getHealth(_options) {
        const requestContextPromise = this.requestFactory.getHealth(_options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getHealth(rsp)));
        }));
    }
}
exports.ObservableHealthApi = ObservableHealthApi;
const SegmentApi_1 = require("../apis/SegmentApi");
class ObservableSegmentApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SegmentApi_1.SegmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SegmentApi_1.SegmentApiResponseProcessor();
    }
    createSegment(flagID, body, _options) {
        const requestContextPromise = this.requestFactory.createSegment(flagID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.createSegment(rsp)));
        }));
    }
    deleteSegment(flagID, segmentID, _options) {
        const requestContextPromise = this.requestFactory.deleteSegment(flagID, segmentID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.deleteSegment(rsp)));
        }));
    }
    findSegments(flagID, _options) {
        const requestContextPromise = this.requestFactory.findSegments(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findSegments(rsp)));
        }));
    }
    putSegment(flagID, segmentID, body, _options) {
        const requestContextPromise = this.requestFactory.putSegment(flagID, segmentID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.putSegment(rsp)));
        }));
    }
    putSegmentsReorder(flagID, body, _options) {
        const requestContextPromise = this.requestFactory.putSegmentsReorder(flagID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.putSegmentsReorder(rsp)));
        }));
    }
}
exports.ObservableSegmentApi = ObservableSegmentApi;
const TagApi_1 = require("../apis/TagApi");
class ObservableTagApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagApi_1.TagApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagApi_1.TagApiResponseProcessor();
    }
    createTag(flagID, body, _options) {
        const requestContextPromise = this.requestFactory.createTag(flagID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.createTag(rsp)));
        }));
    }
    deleteTag(flagID, tagID, _options) {
        const requestContextPromise = this.requestFactory.deleteTag(flagID, tagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.deleteTag(rsp)));
        }));
    }
    findAllTags(limit, offset, valueLike, _options) {
        const requestContextPromise = this.requestFactory.findAllTags(limit, offset, valueLike, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findAllTags(rsp)));
        }));
    }
    findTags(flagID, _options) {
        const requestContextPromise = this.requestFactory.findTags(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findTags(rsp)));
        }));
    }
}
exports.ObservableTagApi = ObservableTagApi;
const VariantApi_1 = require("../apis/VariantApi");
class ObservableVariantApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VariantApi_1.VariantApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VariantApi_1.VariantApiResponseProcessor();
    }
    createVariant(flagID, body, _options) {
        const requestContextPromise = this.requestFactory.createVariant(flagID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.createVariant(rsp)));
        }));
    }
    deleteVariant(flagID, variantID, _options) {
        const requestContextPromise = this.requestFactory.deleteVariant(flagID, variantID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.deleteVariant(rsp)));
        }));
    }
    findVariants(flagID, _options) {
        const requestContextPromise = this.requestFactory.findVariants(flagID, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.findVariants(rsp)));
        }));
    }
    putVariant(flagID, variantID, body, _options) {
        const requestContextPromise = this.requestFactory.putVariant(flagID, variantID, body, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.putVariant(rsp)));
        }));
    }
}
exports.ObservableVariantApi = ObservableVariantApi;
//# sourceMappingURL=ObservableAPI.js.map