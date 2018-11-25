/// <reference path="./types/aspnet.apitypes.d.ts" />
import 'reflect-metadata';
import Vue, {PluginObject, VueConstructor} from 'vue';
import {Container, Inject, Service} from 'typedi';

import {ConfigService} from './services/app/ConfigService';

@Service()
class UiCore {

    @Inject()
    private ConfigService: ConfigService;

    initCore(Vue: VueConstructor<Vue>, options: IConfigurationMap) {
        if (options.http) {
            this.ConfigService.configure('http', options.http);
        }
        if (options.toast) {
            this.ConfigService.configure('toast', options.toast);
        }
    }
}

export default {
    install(Vue, options) {
        Container.get(UiCore).initCore(Vue, options);
    }
} as PluginObject<IConfigurationMap>;
