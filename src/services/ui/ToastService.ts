import {Inject, Service} from 'typedi';
import {IToastService} from '../../framework/interfaces/IToastService';
import {ConfigService} from '../app/ConfigService';

import 'izitoast/dist/css/iziToast.min.css';
import iziToast, {IziToastSettings} from 'izitoast';

@Service()
export class ToastService implements IToastService {

    @Inject()
    ConfigService: ConfigService;

    constructor() {
        iziToast.settings(this.ConfigService.configuration.toast);
    }

    success(message: string, options?: IziToastSettings) {
        iziToast.success({
            message,
            ...options
        })
    }

    error(message: string, options?: IziToastSettings) {
        iziToast.error({
            message,
            ...options
        })
    }

    info(message: string, options?: IziToastSettings) {
        iziToast.info({
            message,
            ...options
        })
    }

    warning(message: string, options?: IziToastSettings) {
        iziToast.warning({
            message,
            ...options
        })
    }
}