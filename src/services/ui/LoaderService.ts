import {Service} from 'typedi';

export interface ILoaderService {
    show(): void;

    hide(): void;
}

@Service()
export class LoaderService implements ILoaderService {

    show(): void {
        const loader = getLoaderInstance();
        if (loader) {
            loader.classList.add('shown');
        }
    }

    hide(): void {
        const loader = getLoaderInstance();
        if (loader) {
            loader.classList.remove('shown');
        }
    }
}

function getLoaderInstance() {
    return document.getElementById('ml-global-loader');
}