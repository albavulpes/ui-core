import {IHttpOptions} from './IHttpService';
import {IToastOptions} from './IToastService';

export interface IConfigService {
    configuration: Partial<IConfigurationMap>;

    configure<TKey extends keyof IConfigurationMap>(configKey: TKey, configuration: IConfigurationMap[TKey]): void;
}

export interface IConfigurationMap {
    http: IHttpOptions;
    toast: IToastOptions;
}