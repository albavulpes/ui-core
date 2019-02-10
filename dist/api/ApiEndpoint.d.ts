import { AxiosInstance } from 'axios';
export declare class ApiEndpoint {
    protected readonly adapter: AxiosInstance;
    constructor(adapter: AxiosInstance);
    private configureAdapter;
}
