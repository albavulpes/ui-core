import {PluginObject} from 'vue';
import {AlbaVulpesApi} from '../api';
import {AxiosRequestConfig} from 'axios';

function instantiateHttpApi(options: AxiosRequestConfig) {
    return new AlbaVulpesApi(options);
}

export default {
    install(Vue, options) {
        Vue.prototype.$http = instantiateHttpApi(options);
    }
} as PluginObject<AxiosRequestConfig>;