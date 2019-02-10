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

    async remove(id: string): Promise<void> {
        await this.adapter.delete(`/chapters/${id}`);
    }
}