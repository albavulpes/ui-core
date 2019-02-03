import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(chapterId: string): Promise<Page[]>;
    get(id: string): Promise<Page>;
    post(data: Page): Promise<Page>;
    put(id: string, data: Page): Promise<Page>;
}
