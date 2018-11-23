import { AlbaVulpesApi } from '../api';
function instantiateHttpApi(options) {
    return new AlbaVulpesApi(options);
}
export default {
    install: function (Vue, options) {
        Vue.prototype.$http = instantiateHttpApi(options);
    }
};

//# sourceMappingURL=http.js.map
