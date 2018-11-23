import { VuexModule } from 'vuex-module-decorators';
import { AuthService } from '../../services/auth/AuthService';
export declare class IdentityStore extends VuexModule {
    UserName: string;
    Email: string;
    AuthService: AuthService;
    fetchIdentity(): Promise<void>;
    private updateIdentity;
}
//# sourceMappingURL=IdentityStore.d.ts.map