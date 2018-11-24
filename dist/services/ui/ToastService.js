import * as tslib_1 from "tslib";
import di, { Require } from '../../di';
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
        Require(),
        tslib_1.__metadata("design:type", ConfigService)
    ], ToastService.prototype, "ConfigService", void 0);
    return ToastService;
}());
export { ToastService };
di.service('ToastService', ToastService);

//# sourceMappingURL=ToastService.js.map
