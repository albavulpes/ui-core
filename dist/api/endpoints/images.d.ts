import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    post(data: FormData): Promise<ImageResponse>;
    postMultiple(data: FormData): Promise<ImageResponse[]>;
}
