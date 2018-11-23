import Vue from 'vue';
export declare class AuthService extends Vue {
    me(): Promise<StatusResponse>;
    login(emailOrUsername: string, password: string): Promise<void>;
    logout(): Promise<void>;
    signup(username: string, email: string, password: string): Promise<void>;
}
//# sourceMappingURL=AuthService.d.ts.map