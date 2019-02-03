import { VuexStore } from '../../framework/decorators/Store';
export declare class IdentityStore extends VuexStore {
    private AuthService;
    private ToastService;
    private LoaderService;
    IsAuthenticated: boolean;
    UserName: string;
    Email: string;
    fetchIdentity(): Promise<void>;
    private updateIdentity;
}
