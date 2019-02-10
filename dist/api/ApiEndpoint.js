var ApiEndpoint = (function () {
    function ApiEndpoint(adapter) {
        this.adapter = this.configureAdapter(adapter);
    }
    ApiEndpoint.prototype.configureAdapter = function (adapter) {
        adapter.interceptors.response.use(function (response) { return response; }, function (error) {
            if (error.response) {
                error.message = error.response.data;
            }
            return Promise.reject(error);
        });
        return adapter;
    };
    return ApiEndpoint;
}());
export { ApiEndpoint };

//# sourceMappingURL=ApiEndpoint.js.map
