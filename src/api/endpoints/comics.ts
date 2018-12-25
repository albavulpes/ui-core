import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async getAll(): Promise<Comic[]> {
        const response = await this.adapter.get<Comic[]>('/comics');

        return response.data;
    }

    async get(id: string): Promise<Comic> {
        const response = await this.adapter.get<Comic>(`/comics/${id}`);

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
}