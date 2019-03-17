import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async post(data: FormData): Promise<ImageResponse> {
        const response = await this.adapter.post<ImageResponse>('/images', data);

        return response.data;
    }

    async postMultiple(data: FormData): Promise<ImageResponse[]> {
        const response = await this.adapter.post<ImageResponse[]>('/images/multiple', data);

        return response.data;
    }
}