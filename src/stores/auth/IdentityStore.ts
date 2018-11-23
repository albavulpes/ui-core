import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import di, {Require} from '../../di';
import {AuthService} from '../../services/auth/AuthService';

@Module
export class IdentityStore extends VuexModule {

    UserName: string;
    Email: string;

    @Require()
    AuthService: AuthService;

    @Action
    async fetchIdentity() {
        const statusResponse = await this.AuthService.me();

        this.updateIdentity(statusResponse);
    }

    @Mutation
    private updateIdentity(identity: StatusResponse) {
        this.UserName = identity.UserName;
        this.Email = identity.Email;
    }
}

di.service('IdentityStore', IdentityStore);
