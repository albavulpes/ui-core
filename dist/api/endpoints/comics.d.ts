import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(): Promise<Comic[]>;
    get(id: string): Promise<Comic>;
    post(data: Comic): Promise<Comic>;
    put(id: string, data: Comic): Promise<Comic>;
}
