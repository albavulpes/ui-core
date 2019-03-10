import * as tslib_1 from "tslib";
import { Service } from 'typedi';
import merge from 'lodash/merge';
var ConfigService = (function () {
    function ConfigService() {
        this.configuration = {};
    }
    ConfigService.prototype.configure = function (configKey, configuration) {
        this.configuration[configKey] = merge((this.configuration[configKey] || {}), configuration);
    };
    ConfigService = tslib_1.__decorate([
        Service({ global: true })
    ], ConfigService);
    return ConfigService;
}());
export { ConfigService };

//# sourceMappingURL=ConfigService.js.map
