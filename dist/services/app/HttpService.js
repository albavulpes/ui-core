import * as tslib_1 from "tslib";
import { Service } from 'typedi';
import axios from 'axios';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import { ConfigService } from './ConfigService';
var __endpointDefns = {
    auth: auth,
    comics: comics
};
var HttpService = (function () {
    function HttpService(ConfigService) {
        this._adapter = axios.create(ConfigService.configuration.http);
        this.configureEndpoints();
    }
    HttpService.prototype.configureEndpoints = function () {
        var self = this;
        self.api = {};
        var _loop_1 = function (endpointName) {
            Object.defineProperty(self.api, endpointName, {
                get: function () {
                    return new __endpointDefns[endpointName](self._adapter);
                }
            });
        };
        for (var endpointName in __endpointDefns) {
            _loop_1(endpointName);
        }
    };
    HttpService = tslib_1.__decorate([
        Service(),
        tslib_1.__metadata("design:paramtypes", [ConfigService])
    ], HttpService);
    return HttpService;
}());
export { HttpService };

//# sourceMappingURL=HttpService.js.map
