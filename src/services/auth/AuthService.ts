import {Inject, Service} from 'typedi';
import {HttpService} from '../app/HttpService';
import {IdentityStore} from '../../stores/auth/IdentityStore';

@Service()
export class AuthService {

    @Inject()
    private HttpService: HttpService;

    @Inject(type => IdentityStore)
    private IdentityStore: IdentityStore;

    async me() {
        return await this.HttpService.api.auth.me();
    }

    async login(emailOrUsername: string, password: string) {
        const response = await this.HttpService.api.auth.login({
            Email: emailOrUsername,
            Password: password
        });

        await this.IdentityStore.fetchIdentity();

        return response;
    }

    async logout() {
        return await this.HttpService.api.auth.logout();
    }

    async signup(username: string, email: string, password: string) {
        return await this.HttpService.api.auth.signup({
            UserName: username,
            Email: email,
            Password: password
        });
    }
}