import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import auth from './api/endpoints/auth';
import comics from './api/endpoints/comics';

const __endpoints = {
    auth,
    comics
};

type EndpointsMap = typeof __endpoints;
type EndpointKeys = (keyof EndpointsMap);

type EndpointInstancesMap = {
    [K in EndpointKeys]: InstanceType<EndpointsMap[K]>;
}

export class AlbavulpesApi implements EndpointInstancesMap {
    protected readonly _adapter: AxiosInstance;

    constructor(options?: AxiosRequestConfig) {
        this._adapter = axios.create(options);

        this.createEndpointInstances();
    }

    private createEndpointInstances() {
        for (let endpointName in __endpoints) {
            Object.defineProperty(this, endpointName, {
                get() {
                    return new this._endpoints[endpointName](this._adapter);
                }
            });
        }
    }

    auth: InstanceType<EndpointsMap['auth']>;
    comics: InstanceType<EndpointsMap['comics']>;
}