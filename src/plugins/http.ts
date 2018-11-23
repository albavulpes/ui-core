import {PluginObject} from 'vue';
import {AlbaVulpesApi} from '../api';
import {AxiosRequestConfig} from 'axios';

export interface HttpOptions extends AxiosRequestConfig {

}

function instantiateHttpApi(options: HttpOptions) {
    return new AlbaVulpesApi(options);
}

export default {
    install(Vue, options) {
        Vue.prototype.$http = instantiateHttpApi(options);
    }
} as PluginObject<HttpOptions>;