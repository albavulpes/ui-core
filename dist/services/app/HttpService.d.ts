import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
declare const __endpointDefns: {
    auth: typeof auth;
    comics: typeof comics;
};
declare type EndpointsMap = typeof __endpointDefns;
declare type EndpointInstancesMap = {
    [K in keyof EndpointsMap]: InstanceType<EndpointsMap[K]>;
};
export declare type HttpService = EndpointInstancesMap;
export {};
//# sourceMappingURL=HttpService.d.ts.map