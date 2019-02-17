/// <reference path="./types/aspnet.apitypes.d.ts" />
import 'reflect-metadata';
import Vue, {PluginObject, VueConstructor} from 'vue';
import {Container, Inject, Service} from 'typedi';

import {ConfigService, IConfigurationMap} from './services/app/ConfigService';

@Service()
class UiCore {

    @Inject()
    private ConfigService: ConfigService;

    async initCore(Vue: VueConstructor<Vue>, options: Partial<IConfigurationMap>) {
        if (options.config) {
            this.ConfigService.configure('config', options.config);
        }
        if (options.http) {
            this.ConfigService.configure('http', options.http);
        }
        if (options.toast) {
            this.ConfigService.configure('toast', options.toast);
        }
    }
}

export default {
    async install(Vue, options) {
        await Container.get(UiCore).initCore(Vue, options);
    }
} as PluginObject<IConfigurationMap>;
