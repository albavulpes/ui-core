import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(comicId: string): Promise<ChapterGroupResponse[]>;
    get(id: string): Promise<ChapterResponse>;
    post(data: Chapter): Promise<Chapter>;
    put(id: string, data: Chapter): Promise<Chapter>;
    remove(id: string): Promise<void>;
}
