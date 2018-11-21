import { AxiosInstance, AxiosRequestConfig } from 'axios';
import auth from './api/endpoints/auth';
import comics from './api/endpoints/comics';
declare const __endpointDefns: {
    auth: typeof auth;
    comics: typeof comics;
};
declare class AlbaVulpesApiClass {
    protected readonly _adapter: AxiosInstance;
    constructor(options?: AxiosRequestConfig);
    private createEndpointInstances;
}
declare type EndpointsMap = typeof __endpointDefns;
declare type EndpointInstancesMap = {
    [K in keyof EndpointsMap]: InstanceType<EndpointsMap[K]>;
};
export declare type AlbaVulpesApi = new (options?: AxiosRequestConfig) => EndpointInstancesMap & AlbaVulpesApiClass;
export declare const AlbaVulpesApi: AlbaVulpesApi;
export {};
//# sourceMappingURL=api.d.ts.map