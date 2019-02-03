import * as tslib_1 from "tslib";
import { Service } from 'typedi';
var LoaderService = (function () {
    function LoaderService() {
    }
    LoaderService.prototype.show = function () {
        var loader = getLoaderInstance();
        if (loader) {
            loader.classList.add('shown');
        }
    };
    LoaderService.prototype.hide = function () {
        var loader = getLoaderInstance();
        if (loader) {
            loader.classList.remove('shown');
        }
    };
    LoaderService = tslib_1.__decorate([
        Service()
    ], LoaderService);
    return LoaderService;
}());
export { LoaderService };
function getLoaderInstance() {
    return document.getElementById('ml-global-loader');
}

//# sourceMappingURL=LoaderService.js.map
