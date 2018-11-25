import {Inject, Service} from 'typedi';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import {ConfigService} from './ConfigService';

const __endpointDefns = {
    auth,
    comics
};

@Service('HttpService')
export class HttpApiClass {

    protected readonly _adapter: AxiosInstance;

    constructor(private ConfigService: ConfigService) {
        this._adapter = axios.create(this.ConfigService.configuration.http);

        this.createEndpointInstances();
    }

    private createEndpointInstances() {
        const self = this;

        for (let endpointName in __endpointDefns) {
            Object.defineProperty(self, endpointName, {
                get() {
                    return new (__endpointDefns as any)[endpointName](this._adapter);
                }
            });
        }
    }
}

// The typing magic here is to tell TypeScript that this class is internally going to have all the endpoints.
type EndpointsMap = typeof __endpointDefns;
type EndpointInstancesMap = {
    [K in keyof EndpointsMap]: InstanceType<EndpointsMap[K]>;
}
export type HttpService = EndpointInstancesMap;
