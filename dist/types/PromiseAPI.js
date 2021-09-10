"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseVariantApi = exports.PromiseTagApi = exports.PromiseSegmentApi = exports.PromiseHealthApi = exports.PromiseFlagApi = exports.PromiseExportApi = exports.PromiseEvaluationApi = exports.PromiseDistributionApi = exports.PromiseConstraintApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseConstraintApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableConstraintApi(configuration, requestFactory, responseProcessor);
    }
    createConstraint(flagID, segmentID, body, _options) {
        const result = this.api.createConstraint(flagID, segmentID, body, _options);
        return result.toPromise();
    }
    deleteConstraint(flagID, segmentID, constraintID, _options) {
        const result = this.api.deleteConstraint(flagID, segmentID, constraintID, _options);
        return result.toPromise();
    }
    findConstraints(flagID, segmentID, _options) {
        const result = this.api.findConstraints(flagID, segmentID, _options);
        return result.toPromise();
    }
    putConstraint(flagID, segmentID, constraintID, body, _options) {
        const result = this.api.putConstraint(flagID, segmentID, constraintID, body, _options);
        return result.toPromise();
    }
}
exports.PromiseConstraintApi = PromiseConstraintApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseDistributionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }
    findDistributions(flagID, segmentID, _options) {
        const result = this.api.findDistributions(flagID, segmentID, _options);
        return result.toPromise();
    }
    putDistributions(flagID, segmentID, body, _options) {
        const result = this.api.putDistributions(flagID, segmentID, body, _options);
        return result.toPromise();
    }
}
exports.PromiseDistributionApi = PromiseDistributionApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseEvaluationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableEvaluationApi(configuration, requestFactory, responseProcessor);
    }
    postEvaluation(body, _options) {
        const result = this.api.postEvaluation(body, _options);
        return result.toPromise();
    }
    postEvaluationBatch(body, _options) {
        const result = this.api.postEvaluationBatch(body, _options);
        return result.toPromise();
    }
}
exports.PromiseEvaluationApi = PromiseEvaluationApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseExportApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableExportApi(configuration, requestFactory, responseProcessor);
    }
    getExportEvalCacheJSON(_options) {
        const result = this.api.getExportEvalCacheJSON(_options);
        return result.toPromise();
    }
    getExportSqlite(excludeSnapshots, _options) {
        const result = this.api.getExportSqlite(excludeSnapshots, _options);
        return result.toPromise();
    }
}
exports.PromiseExportApi = PromiseExportApi;
const ObservableAPI_5 = require("./ObservableAPI");
class PromiseFlagApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFlagApi(configuration, requestFactory, responseProcessor);
    }
    createFlag(body, _options) {
        const result = this.api.createFlag(body, _options);
        return result.toPromise();
    }
    deleteFlag(flagID, _options) {
        const result = this.api.deleteFlag(flagID, _options);
        return result.toPromise();
    }
    findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options) {
        const result = this.api.findFlags(limit, enabled, description, tags, descriptionLike, key, offset, preload, deleted, _options);
        return result.toPromise();
    }
    getFlag(flagID, _options) {
        const result = this.api.getFlag(flagID, _options);
        return result.toPromise();
    }
    getFlagEntityTypes(_options) {
        const result = this.api.getFlagEntityTypes(_options);
        return result.toPromise();
    }
    getFlagSnapshots(flagID, _options) {
        const result = this.api.getFlagSnapshots(flagID, _options);
        return result.toPromise();
    }
    putFlag(flagID, body, _options) {
        const result = this.api.putFlag(flagID, body, _options);
        return result.toPromise();
    }
    restoreFlag(flagID, _options) {
        const result = this.api.restoreFlag(flagID, _options);
        return result.toPromise();
    }
    setFlagEnabled(flagID, body, _options) {
        const result = this.api.setFlagEnabled(flagID, body, _options);
        return result.toPromise();
    }
}
exports.PromiseFlagApi = PromiseFlagApi;
const ObservableAPI_6 = require("./ObservableAPI");
class PromiseHealthApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }
    getHealth(_options) {
        const result = this.api.getHealth(_options);
        return result.toPromise();
    }
}
exports.PromiseHealthApi = PromiseHealthApi;
const ObservableAPI_7 = require("./ObservableAPI");
class PromiseSegmentApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableSegmentApi(configuration, requestFactory, responseProcessor);
    }
    createSegment(flagID, body, _options) {
        const result = this.api.createSegment(flagID, body, _options);
        return result.toPromise();
    }
    deleteSegment(flagID, segmentID, _options) {
        const result = this.api.deleteSegment(flagID, segmentID, _options);
        return result.toPromise();
    }
    findSegments(flagID, _options) {
        const result = this.api.findSegments(flagID, _options);
        return result.toPromise();
    }
    putSegment(flagID, segmentID, body, _options) {
        const result = this.api.putSegment(flagID, segmentID, body, _options);
        return result.toPromise();
    }
    putSegmentsReorder(flagID, body, _options) {
        const result = this.api.putSegmentsReorder(flagID, body, _options);
        return result.toPromise();
    }
}
exports.PromiseSegmentApi = PromiseSegmentApi;
const ObservableAPI_8 = require("./ObservableAPI");
class PromiseTagApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableTagApi(configuration, requestFactory, responseProcessor);
    }
    createTag(flagID, body, _options) {
        const result = this.api.createTag(flagID, body, _options);
        return result.toPromise();
    }
    deleteTag(flagID, tagID, _options) {
        const result = this.api.deleteTag(flagID, tagID, _options);
        return result.toPromise();
    }
    findAllTags(limit, offset, valueLike, _options) {
        const result = this.api.findAllTags(limit, offset, valueLike, _options);
        return result.toPromise();
    }
    findTags(flagID, _options) {
        const result = this.api.findTags(flagID, _options);
        return result.toPromise();
    }
}
exports.PromiseTagApi = PromiseTagApi;
const ObservableAPI_9 = require("./ObservableAPI");
class PromiseVariantApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableVariantApi(configuration, requestFactory, responseProcessor);
    }
    createVariant(flagID, body, _options) {
        const result = this.api.createVariant(flagID, body, _options);
        return result.toPromise();
    }
    deleteVariant(flagID, variantID, _options) {
        const result = this.api.deleteVariant(flagID, variantID, _options);
        return result.toPromise();
    }
    findVariants(flagID, _options) {
        const result = this.api.findVariants(flagID, _options);
        return result.toPromise();
    }
    putVariant(flagID, variantID, body, _options) {
        const result = this.api.putVariant(flagID, variantID, body, _options);
        return result.toPromise();
    }
}
exports.PromiseVariantApi = PromiseVariantApi;
//# sourceMappingURL=PromiseAPI.js.map