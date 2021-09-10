import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateSegmentRequest } from '../models/CreateSegmentRequest';
import { PutSegmentReorderRequest } from '../models/PutSegmentReorderRequest';
import { PutSegmentRequest } from '../models/PutSegmentRequest';
import { Segment } from '../models/Segment';
export declare class SegmentApiRequestFactory extends BaseAPIRequestFactory {
    createSegment(flagID: number, body: CreateSegmentRequest, _options?: Configuration): Promise<RequestContext>;
    deleteSegment(flagID: number, segmentID: number, _options?: Configuration): Promise<RequestContext>;
    findSegments(flagID: number, _options?: Configuration): Promise<RequestContext>;
    putSegment(flagID: number, segmentID: number, body: PutSegmentRequest, _options?: Configuration): Promise<RequestContext>;
    putSegmentsReorder(flagID: number, body: PutSegmentReorderRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SegmentApiResponseProcessor {
    createSegment(response: ResponseContext): Promise<Segment>;
    deleteSegment(response: ResponseContext): Promise<void>;
    findSegments(response: ResponseContext): Promise<Array<Segment>>;
    putSegment(response: ResponseContext): Promise<Segment>;
    putSegmentsReorder(response: ResponseContext): Promise<void>;
}
