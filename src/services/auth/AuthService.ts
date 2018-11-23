import Vue from 'vue';
import di from '../../di';

export class AuthService extends Vue {
    async me() {
        return await this.$http.auth.me();
    }

    async login(emailOrUsername: string, password: string) {
        return await this.$http.auth.login({
            Email: emailOrUsername,
            Password: password
        });
    }

    async logout() {
        return await this.$http.auth.logout();
    }

    async signup(username: string, email: string, password: string) {
        return await this.$http.auth.signup({
            UserName: username,
            Email: email,
            Password: password
        });
    }
}

di.service('AuthService', AuthService);