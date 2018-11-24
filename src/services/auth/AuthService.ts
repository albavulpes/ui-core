import di, {Require} from '../../di';
import {HttpService} from '../app/HttpService';

export class AuthService {

    @Require()
    HttpService: HttpService;

    async me() {
        return await this.HttpService.auth.me();
    }

    async login(emailOrUsername: string, password: string) {
        return await this.HttpService.auth.login({
            Email: emailOrUsername,
            Password: password
        });
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