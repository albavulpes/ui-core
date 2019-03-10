export interface ILoaderService {
    show(): void;
    hide(): void;
}
export declare class LoaderService implements ILoaderService {
    isShown: boolean;
    show(): void;
    hide(): void;
}
