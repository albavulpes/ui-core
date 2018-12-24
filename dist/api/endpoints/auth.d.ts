import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    me(): Promise<StatusResponse>;
    login(loginRequest: LoginRequest): Promise<void>;
    signup(registerRequest: RegisterRequest): Promise<void>;
    logout(): Promise<void>;
}
