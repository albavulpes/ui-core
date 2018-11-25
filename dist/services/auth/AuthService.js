import * as tslib_1 from "tslib";
import { Inject, Service } from 'typedi';
import { IdentityStore } from '../../stores/auth/IdentityStore';
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.me = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.HttpService.auth.me()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.login = function (emailOrUsername, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.HttpService.auth.login({
                            Email: emailOrUsername,
                            Password: password
                        })];
                    case 1:
                        response = _a.sent();
                        return [4, this.IdentityStore.fetchIdentity()];
                    case 2:
                        _a.sent();
                        return [2, response];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.HttpService.auth.logout()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.signup = function (username, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.HttpService.auth.signup({
                            UserName: username,
                            Email: email,
                            Password: password
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        Inject('HttpService'),
        tslib_1.__metadata("design:type", Object)
    ], AuthService.prototype, "HttpService", void 0);
    tslib_1.__decorate([
        Inject(function () { return IdentityStore; }),
        tslib_1.__metadata("design:type", IdentityStore)
    ], AuthService.prototype, "IdentityStore", void 0);
    AuthService = tslib_1.__decorate([
        Service()
    ], AuthService);
    return AuthService;
}());
export { AuthService };

//# sourceMappingURL=AuthService.js.map
