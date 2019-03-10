import * as tslib_1 from "tslib";
import { Inject, Service } from 'typedi';
import { ConfigService } from '../app/ConfigService';
import { HttpService } from '../app/HttpService';
import { IdentityStore } from '../../stores/auth/IdentityStore';
import { ToastService } from '../ui/ToastService';
import $script from 'scriptjs';
var GOOGLEAPI_CDN_URL = 'https://apis.google.com/js/client.js?onload=OnGoogleLoadCallback';
var isGoogleApiLoaded = false;
var GoogleAuthService = (function () {
    function GoogleAuthService() {
    }
    GoogleAuthService.prototype.loginWithGoogle = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var accessToken, response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, sendAuthRequestToGoogle()];
                    case 1:
                        accessToken = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 9]);
                        return [4, this.HttpService.api.auth.loginWithGoogle({
                                AccessToken: accessToken
                            })];
                    case 3:
                        response = _a.sent();
                        return [4, this.IdentityStore.fetchIdentity()];
                    case 4:
                        _a.sent();
                        return [2, response];
                    case 5:
                        error_1 = _a.sent();
                        if (!(error_1.response && error_1.response.status === 400)) return [3, 7];
                        this.ToastService.error("Could not sign in. Please try again.");
                        return [4, signOutFromGoogle()];
                    case 6:
                        _a.sent();
                        return [3, 8];
                    case 7:
                        this.ToastService.error(error_1.message);
                        _a.label = 8;
                    case 8: return [3, 9];
                    case 9: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ConfigService)
    ], GoogleAuthService.prototype, "ConfigService", void 0);
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", HttpService)
    ], GoogleAuthService.prototype, "HttpService", void 0);
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", IdentityStore)
    ], GoogleAuthService.prototype, "IdentityStore", void 0);
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ToastService)
    ], GoogleAuthService.prototype, "ToastService", void 0);
    GoogleAuthService = tslib_1.__decorate([
        Service()
    ], GoogleAuthService);
    return GoogleAuthService;
}());
export { GoogleAuthService };
function initGoogleAPI() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isGoogleApiLoaded)
                        return [2];
                    return [4, new Promise(function (resolve) {
                            window.OnGoogleLoadCallback = function () {
                                delete window.OnGoogleLoadCallback;
                                gapi.client.init({
                                    apiKey: 'AIzaSyBiuYS2xfCpFmhkDiz2WI8j5Fo4T1BlaAo'
                                });
                                isGoogleApiLoaded = true;
                                resolve();
                            };
                            $script(GOOGLEAPI_CDN_URL, function () {
                            });
                        })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function sendAuthRequestToGoogle() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, initGoogleAPI()];
                case 1:
                    _a.sent();
                    return [4, new Promise(function (resolve, reject) {
                            gapi.auth.authorize({
                                client_id: '445973792215-f7iin0g2ed8iouaeeq0s7cag8io6nhug.apps.googleusercontent.com',
                                scope: [
                                    'https://www.googleapis.com/auth/userinfo.profile',
                                    'https://www.googleapis.com/auth/userinfo.email'
                                ],
                                immediate: false
                            }, function (authResult) {
                                if (authResult.error && authResult.error !== 'popup_closed_by_user') {
                                    return reject(new Error(authResult.error));
                                }
                                resolve(authResult.access_token);
                            });
                        })];
                case 2: return [2, _a.sent()];
            }
        });
    });
}
function signOutFromGoogle() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, initGoogleAPI()];
                case 1:
                    _a.sent();
                    gapi.auth.setToken(null);
                    gapi.auth.signOut();
                    return [2];
            }
        });
    });
}

//# sourceMappingURL=GoogleAuthService.js.map
