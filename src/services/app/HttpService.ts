import {Service} from 'typedi';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

import {ConfigService} from './ConfigService';

import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import arcs from '../../api/endpoints/arcs';
import pages from '../../api/endpoints/pages';
import chapters from '../../api/endpoints/chapters';
import images from '../../api/endpoints/images';

export interface IHttpOptions extends AxiosRequestConfig {
}

const __endpointDefns = {
    auth,
    comics,
    arcs,
    chapters,
    pages,
    images
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
