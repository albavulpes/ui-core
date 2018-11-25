import {Service} from 'typedi';
import axios, {AxiosInstance} from 'axios';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import {ConfigService} from './ConfigService';

const __endpointDefns = {
    auth,
    comics
};

@Service()
export class HttpService<TEndpoints extends IHttpEndpoints> implements IHttpService<TEndpoints> {
    [x: string]: import('D:/src/albavulpes/ui-core/src/api/ApiEndpoint').ApiEndpoint;

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
