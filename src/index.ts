/// <reference path="./types/aspnet.apitypes.d.ts" />
import Vue, {PluginObject, VueConstructor} from 'vue';
import {Container, Inject, Service} from 'typedi';

import {ConfigService} from './services/app/ConfigService';
import {IConfigurationMap} from './framework/interfaces/IConfigService';

// import './modules';

@Service()
class UiCore {

    @Inject()
    ConfigService: ConfigService;

    initCore(Vue: VueConstructor<Vue>, options: IConfigurationMap) {
        if (options.http) {
            this.ConfigService.configure('http', options.http);
        }
    }
}

export default {
    install(Vue, options) {
        Container.get(UiCore).initCore(Vue, options);
    }
} as PluginObject<IConfigurationMap>;
