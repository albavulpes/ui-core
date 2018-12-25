import * as tslib_1 from "tslib";
import { Inject, Service } from 'typedi';
import { Action, Mutation, State, VuexStore } from '../../framework/decorators/Store';
import { AuthService } from '../../services/auth/AuthService';
import { ToastService } from '../../services/ui/ToastService';
var IdentityStore = (function (_super) {
    tslib_1.__extends(IdentityStore, _super);
    function IdentityStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentityStore.prototype.fetchIdentity = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var statusResponse, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.AuthService.me()];
                    case 1:
                        statusResponse = _a.sent();
                        this.updateIdentity(statusResponse);
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.response && error_1.response.status !== 401) {
                            this.ToastService.error(error_1.message);
                        }
                        this.IsAuthenticated = false;
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    IdentityStore.prototype.updateIdentity = function (identity) {
        this.UserName = identity.UserName;
        this.Email = identity.Email;
        this.IsAuthenticated = true;
    };
    tslib_1.__decorate([
        Inject(function (type) { return AuthService; }),
        tslib_1.__metadata("design:type", AuthService)
    ], IdentityStore.prototype, "AuthService", void 0);
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ToastService)
    ], IdentityStore.prototype, "ToastService", void 0);
    tslib_1.__decorate([
        State(),
        tslib_1.__metadata("design:type", Boolean)
    ], IdentityStore.prototype, "IsAuthenticated", void 0);
    tslib_1.__decorate([
        State(),
        tslib_1.__metadata("design:type", String)
    ], IdentityStore.prototype, "UserName", void 0);
    tslib_1.__decorate([
        State(),
        tslib_1.__metadata("design:type", String)
    ], IdentityStore.prototype, "Email", void 0);
    tslib_1.__decorate([
        Action(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], IdentityStore.prototype, "fetchIdentity", null);
    tslib_1.__decorate([
        Mutation(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], IdentityStore.prototype, "updateIdentity", null);
    IdentityStore = tslib_1.__decorate([
        Service()
    ], IdentityStore);
    return IdentityStore;
}(VuexStore));
export { IdentityStore };

//# sourceMappingURL=IdentityStore.js.map
