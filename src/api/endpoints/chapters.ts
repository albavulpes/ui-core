import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async getAll(comicId: string): Promise<ChapterGroupResponse[]> {
        const response = await this.adapter.get<ChapterGroupResponse[]>('/chapters', {
            params: {
                comicId
            }
        });

        return response.data;
    }

    async get(id: string): Promise<ChapterResponse> {
        const response = await this.adapter.get<ChapterResponse>(`/chapters/${id}`);

        return response.data;
    }

    async post(data: Chapter): Promise<Chapter> {
        const response = await this.adapter.post<ChapterResponse>(`/chapters`, data);

        return response.data;
    }

    async put(id: string, data: Chapter): Promise<Chapter> {
        const response = await this.adapter.put<ChapterResponse>(`/chapters/${id}`, data);

        return response.data;
    }

    async delete(id: string): Promise<Chapter> {
        const response = await this.adapter.delete(`/chapters/${id}`);

        return response.data;
    }

    async publish(id: string, state: boolean): Promise<Chapter> {
        const response = await this.adapter.put<Chapter>(`/chapters/${id}/publish`, null, {
            params: {
                state
            }
        });

        return response.data;
    }

    async reorder(id: string, index: number): Promise<Chapter> {
        const response = await this.adapter.put<Chapter>(`/chapters/${id}/reorder/${index}`);

        return response.data;
    }
}