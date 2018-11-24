import { VuexStore } from '../../framework/decorators/Store';
import { AuthService } from '../../services/auth/AuthService';
import { ToastService } from '../../services/ui/ToastService';
export declare class IdentityStore extends VuexStore {
    AuthService: AuthService;
    ToastService: ToastService;
    IsAuthenticated: boolean;
    UserName: string;
    Email: string;
    fetchIdentity(): Promise<void>;
    private updateIdentity;
}
//# sourceMappingURL=IdentityStore.d.ts.map