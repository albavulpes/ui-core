import * as tslib_1 from "tslib";
import { Service } from 'typedi';
import axios from 'axios';
import { ConfigService } from './ConfigService';
import auth from '../../api/endpoints/auth';
import comics from '../../api/endpoints/comics';
import arcs from '../../api/endpoints/arcs';
import pages from '../../api/endpoints/pages';
import chapters from '../../api/endpoints/chapters';
import images from '../../api/endpoints/images';
var __endpointDefns = {
    auth: auth,
    comics: comics,
    arcs: arcs,
    chapters: chapters,
    pages: pages,
    images: images
};
var HttpService = (function () {
    function HttpService(configService) {
        this._adapter = axios.create(configService.configuration.http);
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
