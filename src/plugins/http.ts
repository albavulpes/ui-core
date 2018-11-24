import {PluginObject} from 'vue';
import {AlbaVulpesApi} from '../api';
import {IHttpOptions} from '../framework/interfaces/IHttpService';

function instantiateHttpApi(options: IHttpOptions) {
    return new AlbaVulpesApi(options);
}

export default {
    install(Vue, options) {
        Vue.prototype.$http = instantiateHttpApi(options);
    }
} as PluginObject<IHttpOptions>;