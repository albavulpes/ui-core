import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async getAll(comicId: string): Promise<Arc[]> {
        const response = await this.adapter.get<Arc[]>('/arcs', {
            params: {
                comicId
            }
        });

        return response.data;
    }

    async get(id: string): Promise<Arc> {
        const response = await this.adapter.get<Arc>(`/arcs/${id}`);

        return response.data;
    }

    async post(data: Arc): Promise<Arc> {
        const response = await this.adapter.post<Arc>(`/arcs`, data);

        return response.data;
    }

    async put(id: string, data: Arc): Promise<Arc> {
        const response = await this.adapter.put<Arc>(`/arcs/${id}`, data);

        return response.data;
    }
}