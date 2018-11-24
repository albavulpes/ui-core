import di from './di';
function initCore(Vue, options) {
    var configService = di.container.ConfigService;
    if (options.http) {
        configService.configure('http', options.http);
    }
}
export default {
    install: function (Vue, options) {
        initCore(Vue, options);
    }
};

//# sourceMappingURL=index.js.map
