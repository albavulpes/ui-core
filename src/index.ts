/// <reference path="./types/aspnet.apitypes.d.ts" />
import Vue, {PluginObject, VueConstructor} from 'vue';

import http, {HttpOptions} from './plugins/http';

interface CoreOptions {
    http: OptionsProvided<HttpOptions>;
}

type OptionsProvided<TOptions> = TOptions | boolean;

function initCore(Vue: VueConstructor<Vue>, options: CoreOptions) {
    if (options.http) {
        usePlugin(http, options.http);
    }
}

function usePlugin<TOptions>(plugin: PluginObject<TOptions>, options?: OptionsProvided<TOptions>) {
    let optionsToUse;

    if (typeof options === 'object') {
        optionsToUse = options;
    }

    Vue.use(http, optionsToUse);
}

export default {
    install(Vue, options) {
        initCore(Vue, options);
    }
} as PluginObject<CoreOptions>;