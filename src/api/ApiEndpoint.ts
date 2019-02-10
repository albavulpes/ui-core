import {AxiosInstance} from 'axios';

export class ApiEndpoint {
    protected readonly adapter: AxiosInstance;

    constructor(adapter: AxiosInstance) {
        this.adapter = this.configureAdapter(adapter);
    }

    private configureAdapter(adapter: AxiosInstance) {
        adapter.interceptors.response.use(response => response, (error) => {
            if (error.response) {
                error.message = error.response.data;
            }

            return Promise.reject(error);
        });

        return adapter;
    }
}