import {Inject, Service} from 'typedi';
import {Action, Mutation, State, VuexStore} from '../../framework/decorators/Store';

import {AuthService} from '../../services/auth/AuthService';
import {ToastService} from '../../services/ui/ToastService';
import {LoaderService} from '../../services/ui/LoaderService';

@Service()
export class IdentityStore extends VuexStore {

    @Inject(type => AuthService)
    private AuthService: AuthService;

    @Inject()
    private ToastService: ToastService;

    @Inject()
    private LoaderService: LoaderService;

    @State()
    IsAuthenticated: boolean;

    @State()
    UserName: string;

    @State()
    Email: string;

    @Action()
    async fetchIdentity() {
        this.LoaderService.show();

        try {
            const statusResponse = await this.AuthService.me();

            this.updateIdentity(statusResponse);
        }
        catch (error) {
            if (error.response && error.response.status !== 401) {
                this.ToastService.error(error.message);
            }

            this.IsAuthenticated = false;
        }

        this.LoaderService.hide();
    }

    @Mutation()
    private updateIdentity(identity: StatusResponse) {
        this.UserName = identity.UserName;
        this.Email = identity.Email;
        this.IsAuthenticated = true;
    }
}
