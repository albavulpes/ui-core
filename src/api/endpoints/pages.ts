import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async getAll(chapterId: string): Promise<Page[]> {
        const response = await this.adapter.get<Page[]>('/pages', {
            params: {
                chapterId
            }
        });

        return response.data;
    }

    async get(id: string): Promise<Page> {
        const response = await this.adapter.get<Page>(`/pages/${id}`);

        return response.data;
    }

    async getByPageNumber(chapterId: string, pageNumber: number): Promise<Page> {
        const response = await this.adapter.get<Page>('/pages', {
            params: {
                chapterId,
                pageNumber
            }
        });

        return response.data;
    }

    async getPreviousPage(pageId: string): Promise<Page> {
        const response = await this.adapter.get<Page>(`/pages/${pageId}/previous`);

        return response.data;
    }

    async getNextPage(pageId: string): Promise<Page> {
        const response = await this.adapter.get<Page>(`/pages/${pageId}/next`);

        return response.data;
    }

    async post(data: Page): Promise<Page> {
        const response = await this.adapter.post<Page>(`/pages`, data);

        return response.data;
    }

    async put(id: string, data: Page): Promise<Page> {
        const response = await this.adapter.put<Page>(`/pages/${id}`, data);

        return response.data;
    }

    async publish(id: string, state: boolean): Promise<Page> {
        const response = await this.adapter.put<Page>(`/pages/${id}/publish`, null, {
            params: {
                state
            }
        });

        return response.data;
    }

    async reorder(id: string, index: number): Promise<Page> {
        const response = await this.adapter.put<Page>(`/pages/${id}/reorder/${index}`);

        return response.data;
    }
}