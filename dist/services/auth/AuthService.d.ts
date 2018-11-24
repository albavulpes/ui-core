export declare class AuthService {
    private HttpService;
    private IdentityStore;
    me(): Promise<StatusResponse>;
    login(emailOrUsername: string, password: string): Promise<void>;
    logout(): Promise<void>;
    signup(username: string, email: string, password: string): Promise<void>;
}
//# sourceMappingURL=AuthService.d.ts.map