import merge from 'lodash/merge';
var ConfigService = (function () {
    function ConfigService() {
        this.configuration = {};
    }
    ConfigService.prototype.configure = function (configKey, configuration) {
        this.configuration[configKey] = merge((this.configuration[configKey] || {}), configuration);
    };
    return ConfigService;
}());
export { ConfigService };

//# sourceMappingURL=ConfigService.js.map
