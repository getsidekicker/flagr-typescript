"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectVariantApi = exports.ObjectTagApi = exports.ObjectSegmentApi = exports.ObjectHealthApi = exports.ObjectFlagApi = exports.ObjectExportApi = exports.ObjectEvaluationApi = exports.ObjectDistributionApi = exports.ObjectConstraintApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectConstraintApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableConstraintApi(configuration, requestFactory, responseProcessor);
    }
    createConstraint(param, options) {
        return this.api.createConstraint(param.flagID, param.segmentID, param.body, options).toPromise();
    }
    deleteConstraint(param, options) {
        return this.api.deleteConstraint(param.flagID, param.segmentID, param.constraintID, options).toPromise();
    }
    findConstraints(param, options) {
        return this.api.findConstraints(param.flagID, param.segmentID, options).toPromise();
    }
    putConstraint(param, options) {
        return this.api.putConstraint(param.flagID, param.segmentID, param.constraintID, param.body, options).toPromise();
    }
}
exports.ObjectConstraintApi = ObjectConstraintApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectDistributionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }
    findDistributions(param, options) {
        return this.api.findDistributions(param.flagID, param.segmentID, options).toPromise();
    }
    putDistributions(param, options) {
        return this.api.putDistributions(param.flagID, param.segmentID, param.body, options).toPromise();
    }
}
exports.ObjectDistributionApi = ObjectDistributionApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectEvaluationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableEvaluationApi(configuration, requestFactory, responseProcessor);
    }
    postEvaluation(param, options) {
        return this.api.postEvaluation(param.body, options).toPromise();
    }
    postEvaluationBatch(param, options) {
        return this.api.postEvaluationBatch(param.body, options).toPromise();
    }
}
exports.ObjectEvaluationApi = ObjectEvaluationApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectExportApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableExportApi(configuration, requestFactory, responseProcessor);
    }
    getExportEvalCacheJSON(param, options) {
        return this.api.getExportEvalCacheJSON(options).toPromise();
    }
    getExportSqlite(param, options) {
        return this.api.getExportSqlite(param.excludeSnapshots, options).toPromise();
    }
}
exports.ObjectExportApi = ObjectExportApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectFlagApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFlagApi(configuration, requestFactory, responseProcessor);
    }
    createFlag(param, options) {
        return this.api.createFlag(param.body, options).toPromise();
    }
    deleteFlag(param, options) {
        return this.api.deleteFlag(param.flagID, options).toPromise();
    }
    findFlags(param, options) {
        return this.api.findFlags(param.limit, param.enabled, param.description, param.tags, param.descriptionLike, param.key, param.offset, param.preload, param.deleted, options).toPromise();
    }
    getFlag(param, options) {
        return this.api.getFlag(param.flagID, options).toPromise();
    }
    getFlagEntityTypes(param, options) {
        return this.api.getFlagEntityTypes(options).toPromise();
    }
    getFlagSnapshots(param, options) {
        return this.api.getFlagSnapshots(param.flagID, options).toPromise();
    }
    putFlag(param, options) {
        return this.api.putFlag(param.flagID, param.body, options).toPromise();
    }
    restoreFlag(param, options) {
        return this.api.restoreFlag(param.flagID, options).toPromise();
    }
    setFlagEnabled(param, options) {
        return this.api.setFlagEnabled(param.flagID, param.body, options).toPromise();
    }
}
exports.ObjectFlagApi = ObjectFlagApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectHealthApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }
    getHealth(param, options) {
        return this.api.getHealth(options).toPromise();
    }
}
exports.ObjectHealthApi = ObjectHealthApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectSegmentApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableSegmentApi(configuration, requestFactory, responseProcessor);
    }
    createSegment(param, options) {
        return this.api.createSegment(param.flagID, param.body, options).toPromise();
    }
    deleteSegment(param, options) {
        return this.api.deleteSegment(param.flagID, param.segmentID, options).toPromise();
    }
    findSegments(param, options) {
        return this.api.findSegments(param.flagID, options).toPromise();
    }
    putSegment(param, options) {
        return this.api.putSegment(param.flagID, param.segmentID, param.body, options).toPromise();
    }
    putSegmentsReorder(param, options) {
        return this.api.putSegmentsReorder(param.flagID, param.body, options).toPromise();
    }
}
exports.ObjectSegmentApi = ObjectSegmentApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectTagApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableTagApi(configuration, requestFactory, responseProcessor);
    }
    createTag(param, options) {
        return this.api.createTag(param.flagID, param.body, options).toPromise();
    }
    deleteTag(param, options) {
        return this.api.deleteTag(param.flagID, param.tagID, options).toPromise();
    }
    findAllTags(param, options) {
        return this.api.findAllTags(param.limit, param.offset, param.valueLike, options).toPromise();
    }
    findTags(param, options) {
        return this.api.findTags(param.flagID, options).toPromise();
    }
}
exports.ObjectTagApi = ObjectTagApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectVariantApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableVariantApi(configuration, requestFactory, responseProcessor);
    }
    createVariant(param, options) {
        return this.api.createVariant(param.flagID, param.body, options).toPromise();
    }
    deleteVariant(param, options) {
        return this.api.deleteVariant(param.flagID, param.variantID, options).toPromise();
    }
    findVariants(param, options) {
        return this.api.findVariants(param.flagID, options).toPromise();
    }
    putVariant(param, options) {
        return this.api.putVariant(param.flagID, param.variantID, param.body, options).toPromise();
    }
}
exports.ObjectVariantApi = ObjectVariantApi;
//# sourceMappingURL=ObjectParamAPI.js.map