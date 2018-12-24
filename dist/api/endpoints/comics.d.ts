import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    getAll(): Promise<Comic[]>;
    get(id: string): Promise<Comic>;
}
