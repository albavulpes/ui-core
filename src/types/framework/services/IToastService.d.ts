import {IziToastSettings} from 'izitoast';

declare global {
    interface IToastService {
        success: IToastMethod;
        error: IToastMethod;
        warning: IToastMethod;
        info: IToastMethod;
    }

    interface IToastMethod {
        (message: string, options?: IziToastSettings): void;
    }

    interface IToastOptions extends IziToastSettings {
    }
}