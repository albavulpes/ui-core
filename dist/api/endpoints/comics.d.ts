import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(): Promise<ComicResponse[]>;
    get(id: string): Promise<ComicResponse>;
    post(data: Comic): Promise<Comic>;
    put(id: string, data: Comic): Promise<Comic>;
    delete(id: string): Promise<Comic>;
    publish(id: string, state: boolean): Promise<Comic>;
}
