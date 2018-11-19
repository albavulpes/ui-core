import axios from 'axios';
import auth from './api/endpoints/auth';
import comics from './api/endpoints/comics';
var __endpointDefns = {
    auth: auth,
    comics: comics
};
var AlbaVulpesApiClass = (function () {
    function AlbaVulpesApiClass(options) {
        this._adapter = axios.create(options);
        this.createEndpointInstances();
    }
    AlbaVulpesApiClass.prototype.createEndpointInstances = function () {
        var _loop_1 = function (endpointName) {
            Object.defineProperty(this_1, endpointName, {
                get: function () {
                    return new this._endpoints[endpointName](this._adapter);
                }
            });
        };
        var this_1 = this;
        for (var endpointName in __endpointDefns) {
            _loop_1(endpointName);
        }
    };
    return AlbaVulpesApiClass;
}());
export var AlbaVulpesApi = AlbaVulpesApiClass;

//# sourceMappingURL=api.js.map
