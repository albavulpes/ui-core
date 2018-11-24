import { IziToastSettings } from 'izitoast';
export interface IToastService {
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
//# sourceMappingURL=IToastService.d.ts.map