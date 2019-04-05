import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(chapterId: string): Promise<Page[]>;
    get(id: string): Promise<Page>;
    getByPageNumber(chapterId: string, pageNumber: number): Promise<Page>;
    getPreviousPage(pageId: string): Promise<Page>;
    getNextPage(pageId: string): Promise<Page>;
    post(data: Page): Promise<Page>;
    put(id: string, data: Page): Promise<Page>;
    publish(id: string, state: boolean): Promise<Page>;
    reorder(id: string, index: number): Promise<Page>;
}
