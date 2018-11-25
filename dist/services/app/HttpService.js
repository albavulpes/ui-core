import * as tslib_1 from "tslib";
import { Inject, Service } from 'typedi';
import axios from 'axios';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import { ConfigService } from './ConfigService';
var __endpointDefns = {
    auth: auth,
    comics: comics
};
var HttpApiClass = (function () {
    function HttpApiClass() {
        this._adapter = axios.create(this.ConfigService.configuration.http);
        this.createEndpointInstances();
    }
    HttpApiClass.prototype.createEndpointInstances = function () {
        var self = this;
        var _loop_1 = function (endpointName) {
            Object.defineProperty(self, endpointName, {
                get: function () {
                    return new __endpointDefns[endpointName](this._adapter);
                }
            });
        };
        for (var endpointName in __endpointDefns) {
            _loop_1(endpointName);
        }
    };
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ConfigService)
    ], HttpApiClass.prototype, "ConfigService", void 0);
    HttpApiClass = tslib_1.__decorate([
        Service('HttpService'),
        tslib_1.__metadata("design:paramtypes", [])
    ], HttpApiClass);
    return HttpApiClass;
}());

//# sourceMappingURL=HttpService.js.map
