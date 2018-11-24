/// <reference path="./types/aspnet.apitypes.d.ts" />
import Vue, {PluginObject, VueConstructor} from 'vue';
import {Require} from './di';

import {ConfigService} from './services/app/ConfigService';
import {IConfigurationMap} from './framework/interfaces/IConfigService';

class UiCore {

    @Require()
    ConfigService: ConfigService;

    initCore(Vue: VueConstructor<Vue>, options: IConfigurationMap) {
        if (options.http) {
            this.ConfigService.configure('http', options.http);
        }
    }
}

export default {
    install(Vue, options) {
        new UiCore().initCore(Vue, options);
    }
} as PluginObject<IConfigurationMap>;