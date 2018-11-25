import {AxiosRequestConfig} from 'axios';
import {ApiEndpoint} from '../../../api/ApiEndpoint';

declare global {
    interface IHttpEndpoints<TEndpoint extends ApiEndpoint> {
        [key: string]: TEndpoint;
    }

    type EndpointInstancesMap<TEndpoint extends ApiEndpoint> = {
        [K in keyof IHttpEndpoints]: IHttpEndpoints[K];
    }

    interface IHttpService<TEndpoint extends ApiEndpoint, TEndpoints extends IHttpEndpoints<TEndpoint>> extends EndpointInstancesMap {
    }

    interface IHttpOptions extends AxiosRequestConfig {
        // endpoints: { [key: string]: ApiEndpoint }
    }
}