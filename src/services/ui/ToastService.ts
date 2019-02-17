import {Service} from 'typedi';
import {ConfigService} from '../app/ConfigService';

import 'izitoast/dist/css/iziToast.min.css';
import iziToast, {IziToastSettings} from 'izitoast';

export interface IToastService {
    clear(): void;
    success: IToastMethod;
    error: IToastMethod;
    warning: IToastMethod;
    info: IToastMethod;
}

export interface IToastMethod {
    (message: string, options?: IziToastSettings): void;
}

export interface IToastOptions extends IziToastSettings {
}

@Service()
export class ToastService implements IToastService {

    constructor(configService: ConfigService) {
        iziToast.settings(configService.configuration.toast);
    }

    clear() {
        iziToast.destroy();
    }

    success(message: string, options?: IziToastSettings) {
        iziToast.success({
            message,
            ...options
        });
    }

    error(message: string, options?: IziToastSettings) {
        iziToast.error({
            message,
            ...options
        });
    }

    info(message: string, options?: IziToastSettings) {
        iziToast.info({
            message,
            ...options
        });
    }

    warning(message: string, options?: IziToastSettings) {
        iziToast.warning({
            message,
            ...options
        });
    }
}