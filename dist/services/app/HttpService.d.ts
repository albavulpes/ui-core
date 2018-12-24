import { AxiosInstance, AxiosRequestConfig } from 'axios';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import { ConfigService } from './ConfigService';
import { ApiEndpoint } from '../../api/ApiEndpoint';
export interface IHttpEndpoints {
    [x: string]: ApiEndpoint;
}
export interface IHttpOptions extends AxiosRequestConfig {
}
declare const __endpointDefns: {
    auth: typeof auth;
    comics: typeof comics;
};
declare type eDefns = typeof __endpointDefns;
declare type EndpointInstancesMap = {
    [K in keyof eDefns]: InstanceType<eDefns[K]>;
};
export declare class HttpService {
    protected readonly _adapter: AxiosInstance;
    api: EndpointInstancesMap;
    constructor(ConfigService: ConfigService);
    private configureEndpoints;
}
export {};
