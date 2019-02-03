import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(arcId: string): Promise<Chapter[]>;
    get(id: string): Promise<Chapter>;
    post(data: Chapter): Promise<Chapter>;
    put(id: string, data: Chapter): Promise<Chapter>;
}
