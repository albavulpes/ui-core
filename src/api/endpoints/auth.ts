import {ApiEndpoint} from '../ApiEndpoint';

export default class extends ApiEndpoint {
    async me(): Promise<StatusResponse> {
        const response = await this.adapter.get<StatusResponse>('/auth/me');

        return response.data;
    }

    async login(loginRequest: LoginRequest): Promise<void> {
        const response = await this.adapter.post<void>('/auth/login', {
            data: loginRequest
        });

        return response.data;
    }

    async signup(registerRequest: RegisterRequest): Promise<void> {
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