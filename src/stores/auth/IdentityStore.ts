import di, {Require} from '../../di';
import {Action, Mutation, State, VuexStore} from '../../framework/decorators/Store';

import {AuthService} from '../../services/auth/AuthService';
import {ToastService} from '../../services/ui/ToastService';

export class IdentityStore extends VuexStore {

    @Require()
    AuthService: AuthService;

    @Require()
    ToastService: ToastService;

    @State()
    IsAuthenticated: boolean;

    @State()
    UserName: string;

    @State()
    Email: string;

    @Action()
    async fetchIdentity() {
        try {
            const statusResponse = await this.AuthService.me();

            this.updateIdentity(statusResponse);
        }
        catch (error) {
            if (error.response && error.response.status !== 401) {
                this.ToastService.error(error.message);
            }
        }
    }

    @Mutation()
    private updateIdentity(identity: StatusResponse) {
        this.UserName = identity.UserName;
        this.Email = identity.Email;
        this.IsAuthenticated = true;
    }
}

di.service('IdentityStore', IdentityStore);
