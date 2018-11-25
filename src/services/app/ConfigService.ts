import {Service} from 'typedi';
import {IConfigService, IConfigurationMap} from '../../framework/interfaces/IConfigService';
import merge from 'lodash/merge';

@Service()
export class ConfigService implements IConfigService {
    configuration: Partial<IConfigurationMap> = {};

    configure<TKey extends keyof IConfigurationMap>(configKey: TKey, configuration: IConfigurationMap[TKey]) {
        this.configuration[configKey] = merge((this.configuration[configKey] || {}), configuration);
    }
}
