import {Service} from 'typedi';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';

import {ConfigService} from './ConfigService';
import {ApiEndpoint} from '../../api/ApiEndpoint';

export interface IHttpEndpoints {
    [x: string]: ApiEndpoint;
}

export interface IHttpOptions extends AxiosRequestConfig {
    // endpoints: { [key: string]: ApiEndpoint }
}

const __endpointDefns = {
    auth,
    comics
};

type eDefns = typeof __endpointDefns;

type EndpointInstancesMap = {
    [K in keyof eDefns]: InstanceType<eDefns[K]>;
}

@Service()
export class HttpService {
    protected readonly _adapter: AxiosInstance;

    api: EndpointInstancesMap;

    constructor(ConfigService: ConfigService) {
        this._adapter = axios.create(ConfigService.configuration.http);

        this.configureEndpoints();
    }

    private configureEndpoints() {
        const self = this;
        self.api = {} as any;

        for (let endpointName in __endpointDefns) {
            Object.defineProperty(self.api, endpointName, {
                get() {
                    return new (__endpointDefns as any)[endpointName](self._adapter);
                }
            });
        }
    }
}
