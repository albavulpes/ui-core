import { ApiEndpoint } from '../ApiEndpoint';
export default class extends ApiEndpoint {
    login(loginRequest: LoginRequest): Promise<void>;
    signup(registerRequest: RegisterRequest): Promise<void>;
    logout(): Promise<void>;
}
//# sourceMappingURL=auth.d.ts.map