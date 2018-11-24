import { IConfigService, IConfigurationMap } from '../../framework/interfaces/IConfigService';
export declare class ConfigService implements IConfigService {
    configuration: Partial<IConfigurationMap>;
    configure<TKey extends keyof IConfigurationMap>(configKey: TKey, configuration: IConfigurationMap[TKey]): void;
}
//# sourceMappingURL=ConfigService.d.ts.map