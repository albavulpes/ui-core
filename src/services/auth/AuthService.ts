import di, {Require} from '../../di';
import {HttpService} from '../app/HttpService';
import {IdentityStore} from '../../stores/auth/IdentityStore';

export class AuthService {

    @Require()
    private HttpService: HttpService;

    @Require()
    private IdentityStore: IdentityStore;

    async me() {
        return await this.HttpService.auth.me();
    }

    async login(emailOrUsername: string, password: string) {
        const response = await this.HttpService.auth.login({
            Email: emailOrUsername,
            Password: password
        });

        await this.IdentityStore.fetchIdentity();

        return response;
    }

    async logout() {
        return await this.HttpService.auth.logout();
    }

    async signup(username: string, email: string, password: string) {
        return await this.HttpService.auth.signup({
            UserName: username,
            Email: email,
            Password: password
        });
    }
}

di.service('AuthService', AuthService);