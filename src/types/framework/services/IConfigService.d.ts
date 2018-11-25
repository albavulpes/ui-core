import {ApiEndpoint} from '../../../api/ApiEndpoint';

interface IConfigService {
    configuration: Partial<IConfigurationMap>;

    configure<TKey extends keyof IConfigurationMap>(configKey: TKey, configuration: IConfigurationMap[TKey]): void;
}

interface IConfigurationMap {
    http: IHttpOptions;
    toast: IToastOptions;
}