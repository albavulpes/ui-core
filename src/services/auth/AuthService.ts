import {Inject, Service} from 'typedi';
import {HttpService} from '../app/HttpService';
import {IdentityStore} from '../../stores/auth/IdentityStore';

@Service()
export class AuthService {

    @Inject()
    private HttpService: HttpService;

    @Inject(type => AuthService)
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