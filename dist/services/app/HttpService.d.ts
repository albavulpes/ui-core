import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigService } from './ConfigService';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import arcs from '../../api/endpoints/arcs';
import pages from '../../api/endpoints/pages';
import chapters from '../../api/endpoints/chapters';
import images from '../../api/endpoints/images';
export interface IHttpOptions extends AxiosRequestConfig {
}
declare const __endpointDefns: {
    auth: typeof auth;
    comics: typeof comics;
    arcs: typeof arcs;
    chapters: typeof chapters;
    pages: typeof pages;
    images: typeof images;
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
