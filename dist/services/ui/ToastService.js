import * as tslib_1 from "tslib";
import { Service } from 'typedi';
import { ConfigService } from '../app/ConfigService';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
var ToastService = (function () {
    function ToastService(configService) {
        iziToast.settings(configService.configuration.toast);
    }
    ToastService.prototype.clear = function () {
        iziToast.destroy();
    };
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
    ToastService = tslib_1.__decorate([
        Service({ global: true }),
        tslib_1.__metadata("design:paramtypes", [ConfigService])
    ], ToastService);
    return ToastService;
}());
export { ToastService };

//# sourceMappingURL=ToastService.js.map
