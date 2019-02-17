import {Service} from 'typedi';
import merge from 'lodash/merge';
import {IHttpOptions} from './HttpService';
import {IToastOptions} from '../ui/ToastService';

export interface IConfigService {
    configuration: Partial<IConfigurationMap>;

    configure<TKey extends keyof IConfigurationMap>(configKey: TKey, configuration: IConfigurationMap[TKey]): void;
}

export interface IConfigOptions {
    api: boolean;
}

export interface IConfigurationMap {
    config: IConfigOptions;
    http: IHttpOptions;
    toast: IToastOptions;
}

@Service()
export class ConfigService implements IConfigService {
    configuration: Partial<IConfigurationMap> = {};

    configure<TKey extends keyof IConfigurationMap>(configKey: TKey, configuration: IConfigurationMap[TKey]) {
        this.configuration[configKey] = merge((this.configuration[configKey] || {}), configuration);
    }
}
