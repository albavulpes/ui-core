import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async getAll(arcId: string): Promise<Chapter[]> {
        const response = await this.adapter.get<Chapter[]>('/chapters', {
            params: {
                arcId
            }
        });

        return response.data;
    }

    async get(id: string): Promise<Chapter> {
        const response = await this.adapter.get<Chapter>(`/chapters/${id}`);

        return response.data;
    }

    async post(data: Chapter): Promise<Chapter> {
        const response = await this.adapter.post<Chapter>(`/chapters`, data);

        return response.data;
    }

    async put(id: string, data: Chapter): Promise<Chapter> {
        const response = await this.adapter.put<Chapter>(`/chapters/${id}`, data);

        return response.data;
    }
}