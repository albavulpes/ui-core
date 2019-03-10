import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(comicId: string): Promise<ChapterGroupResponse[]>;
    get(id: string): Promise<ChapterResponse>;
    post(data: Chapter): Promise<Chapter>;
    put(id: string, data: Chapter): Promise<Chapter>;
    delete(id: string): Promise<Chapter>;
    publish(id: string, state: boolean): Promise<Chapter>;
}
