import * as tslib_1 from "tslib";
import { Inject, Service } from 'typedi';
import { ConfigService } from '../app/ConfigService';
import { HttpService } from '../app/HttpService';
import { IdentityStore } from '../../stores/auth/IdentityStore';
import $script from 'scriptjs';
var GOOGLEAPI_CDN_URL = 'https://apis.google.com/js/client.js?onload=OnGoogleLoadCallback';
var isGoogleApiLoaded = false;
var GoogleAuthService = (function () {
    function GoogleAuthService() {
    }
    GoogleAuthService.prototype.loginWithGoogle = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var accessToken, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, sendAuthRequestToGoogle()];
                    case 1:
                        accessToken = _a.sent();
                        console.log(accessToken);
                        return [4, this.HttpService.api.auth.loginWithGoogle({
                                AccessToken: accessToken
                            })];
                    case 2:
                        response = _a.sent();
                        return [4, this.IdentityStore.fetchIdentity()];
                    case 3:
                        _a.sent();
                        return [2, response];
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

//# sourceMappingURL=GoogleAuthService.js.map
