import { IToastService } from '../../framework/interfaces/IToastService';
import { ConfigService } from '../app/ConfigService';
import 'izitoast/dist/css/iziToast.min.css';
import { IziToastSettings } from 'izitoast';
export declare class ToastService implements IToastService {
    ConfigService: ConfigService;
    constructor();
    success(message: string, options?: IziToastSettings): void;
    error(message: string, options?: IziToastSettings): void;
    info(message: string, options?: IziToastSettings): void;
    warning(message: string, options?: IziToastSettings): void;
}
//# sourceMappingURL=ToastService.d.ts.map