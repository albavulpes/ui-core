import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async getAll(): Promise<ComicResponse[]> {
        const response = await this.adapter.get<ComicResponse[]>('/comics');

        return response.data;
    }

    async get(id: string): Promise<ComicResponse> {
        const response = await this.adapter.get<ComicResponse>(`/comics/${id}`);

        return response.data;
    }

    async post(data: Comic): Promise<Comic> {
        const response = await this.adapter.post<Comic>(`/comics`, data);

        return response.data;
    }

    async put(id: string, data: Comic): Promise<Comic> {
        const response = await this.adapter.put<Comic>(`/comics/${id}`, data);

        return response.data;
    }

    async delete(id: string): Promise<Comic> {
        const response = await this.adapter.delete(`/comics/${id}`);

        return response.data;
    }

    async publish(id: string, state: boolean): Promise<Comic> {
        const response = await this.adapter.put<Comic>(`/comics/${id}/publish`, null, {
            params: {
                state
            }
        });

        return response.data;
    }
}