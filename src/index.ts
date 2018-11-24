/// <reference path="./types/aspnet.apitypes.d.ts" />
import Vue, {PluginObject, VueConstructor} from 'vue';
import di from './di';

import {ConfigService} from './services/app/ConfigService';
import {IConfigurationMap} from './framework/interfaces/IConfigService';

function initCore(Vue: VueConstructor<Vue>, options: IConfigurationMap) {
    const configService = di.container.ConfigService as ConfigService;

    if (options.http) {
        configService.configure('http', options.http);
    }
}

export default {
    install(Vue, options) {
        initCore(Vue, options);
    }
} as PluginObject<IConfigurationMap>;