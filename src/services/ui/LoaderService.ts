import {Service} from 'typedi';

export interface ILoaderService {
    show(): void;

    hide(): void;
}

@Service({global: true})
export class LoaderService implements ILoaderService {

    isShown = false;

    show(): void {
        const loader = getLoaderInstance();
        if (loader) {
            this.isShown = true;

            setTimeout(() => {
                if (this.isShown) {
                    loader.classList.add('shown');
                }
            }, 750);
        }
    }

    hide(): void {
        const loader = getLoaderInstance();
        if (loader) {
            loader.classList.remove('shown');

            this.isShown = false;
        }
    }
}

function getLoaderInstance() {
    return document.getElementById('ml-global-loader');
}