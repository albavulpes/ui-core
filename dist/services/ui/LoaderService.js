import * as tslib_1 from "tslib";
import { Service } from 'typedi';
var LoaderService = (function () {
    function LoaderService() {
        this.isShown = false;
    }
    LoaderService.prototype.show = function () {
        var _this = this;
        var loader = getLoaderInstance();
        if (loader) {
            this.isShown = true;
            setTimeout(function () {
                if (_this.isShown) {
                    loader.classList.add('shown');
                }
            }, 750);
        }
    };
    LoaderService.prototype.hide = function () {
        var loader = getLoaderInstance();
        if (loader) {
            loader.classList.remove('shown');
            this.isShown = false;
        }
    };
    LoaderService = tslib_1.__decorate([
        Service({ global: true })
    ], LoaderService);
    return LoaderService;
}());
export { LoaderService };
function getLoaderInstance() {
    return document.getElementById('ml-global-loader');
}

//# sourceMappingURL=LoaderService.js.map
