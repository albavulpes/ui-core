import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async login(loginRequest: any): Promise<void> {
        const response = await this.adapter.post<void>('/auth/login', {
            data: loginRequest
        });

        return response.data;
    }

    async signup(registerRequest: any): Promise<void> {
        const response = await this.adapter.post<void>('/auth/signup', {
            data: registerRequest
        });

        return response.data;
    }

    async logout(): Promise<void> {
        const response = await this.adapter.post<void>('/auth/logout');

        return response.data;
    }
}