import * as tslib_1 from "tslib";
import 'reflect-metadata';
import { Container, Inject, Service } from 'typedi';
import { ConfigService } from './services/app/ConfigService';
var UiCore = (function () {
    function UiCore() {
    }
    UiCore.prototype.initCore = function (Vue, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (options.config) {
                    this.ConfigService.configure('config', options.config);
                }
                if (options.http) {
                    this.ConfigService.configure('http', options.http);
                }
                if (options.toast) {
                    this.ConfigService.configure('toast', options.toast);
                }
                return [2];
            });
        });
    };
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ConfigService)
    ], UiCore.prototype, "ConfigService", void 0);
    UiCore = tslib_1.__decorate([
        Service()
    ], UiCore);
    return UiCore;
}());
export default {
    install: function (Vue, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Container.get(UiCore).initCore(Vue, options)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    }
};

//# sourceMappingURL=index.js.map
