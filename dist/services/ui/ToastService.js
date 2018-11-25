import * as tslib_1 from "tslib";
import { Inject, Service } from 'typedi';
import { ConfigService } from '../app/ConfigService';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
var ToastService = (function () {
    function ToastService() {
        iziToast.settings(this.ConfigService.configuration.toast);
    }
    ToastService.prototype.success = function (message, options) {
        iziToast.success(tslib_1.__assign({ message: message }, options));
    };
    ToastService.prototype.error = function (message, options) {
        iziToast.error(tslib_1.__assign({ message: message }, options));
    };
    ToastService.prototype.info = function (message, options) {
        iziToast.info(tslib_1.__assign({ message: message }, options));
    };
    ToastService.prototype.warning = function (message, options) {
        iziToast.warning(tslib_1.__assign({ message: message }, options));
    };
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ConfigService)
    ], ToastService.prototype, "ConfigService", void 0);
    ToastService = tslib_1.__decorate([
        Service(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());
export { ToastService };

//# sourceMappingURL=ToastService.js.map
