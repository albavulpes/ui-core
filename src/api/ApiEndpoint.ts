import {AxiosInstance} from 'axios';

export class ApiEndpoint {
    protected readonly adapter: AxiosInstance;

    constructor(adapter: AxiosInstance) {
        this.adapter = adapter;
    }
}