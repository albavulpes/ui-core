import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import auth from './api/endpoints/auth';
import comics from './api/endpoints/comics';

const __endpointDefns = {
    auth,
    comics
};

class AlbaVulpesApiClass {
    protected readonly _adapter: AxiosInstance;

    constructor(options?: AxiosRequestConfig) {
        this._adapter = axios.create(options);

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
export type AlbaVulpesApi = new(options?: AxiosRequestConfig) => EndpointInstancesMap & AlbaVulpesApiClass;

export const AlbaVulpesApi: AlbaVulpesApi = AlbaVulpesApiClass as any;
