import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(comicId: string): Promise<Arc[]>;
    get(id: string): Promise<Arc>;
    post(data: Arc): Promise<Arc>;
    put(id: string, data: Arc): Promise<Arc>;
}
