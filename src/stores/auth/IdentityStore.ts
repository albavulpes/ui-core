import di, {Require} from '../../di';
import {Action, Mutation, State, VuexStore} from '../../framework/Store';

import {AuthService} from '../../services/auth/AuthService';

export class IdentityStore extends VuexStore {

    @Require()
    AuthService: AuthService;

    @State()
    IsAuthenticated: boolean;

    @State()
    UserName: string;

    @State()
    Email: string;

    @Action()
    async fetchIdentity() {
        const statusResponse = await this.AuthService.me();

        this.updateIdentity(statusResponse);

        this.IsAuthenticated = true;
    }

    @Mutation()
    private updateIdentity(identity: StatusResponse) {
        this.UserName = identity.UserName;
        this.Email = identity.Email;
    }
}

di.service('IdentityStore', IdentityStore);
