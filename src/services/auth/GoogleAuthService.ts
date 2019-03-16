import {Inject, Service} from 'typedi';
import {ConfigService} from '../app/ConfigService';
import {HttpService} from '../app/HttpService';
import {IdentityStore} from '../../stores/auth/IdentityStore';
import {AxiosError} from 'axios';
import {ToastService} from '../ui/ToastService';

import $script from 'scriptjs';

const GOOGLEAPI_CDN_URL = 'https://apis.google.com/js/client.js?onload=OnGoogleLoadCallback';

let isGoogleApiLoaded = false;

@Service()
export class GoogleAuthService {

    @Inject()
    private ConfigService: ConfigService;

    @Inject()
    private HttpService: HttpService;

    @Inject()
    private IdentityStore: IdentityStore;

    @Inject()
    private ToastService: ToastService;

    async loginWithGoogle() {
        const accessToken = await sendAuthRequestToGoogle();

        try {
            const response = await this.HttpService.api.auth.loginWithGoogle({
                AccessToken: accessToken
            });

            await this.IdentityStore.fetchIdentity();

            return response;
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                this.ToastService.error(`Could not sign in. Please try again.`);

                await signOutFromGoogle();
            }
            else {
                this.ToastService.error(error.message);
            }
        }
    }
}

async function initGoogleAPI() {
    if (isGoogleApiLoaded)
        return;

    return await new Promise(resolve => {
        (window as any).OnGoogleLoadCallback = function () {
            delete (window as any).OnGoogleLoadCallback;

            gapi.client.init({
                apiKey: 'AIzaSyBiuYS2xfCpFmhkDiz2WI8j5Fo4T1BlaAo' // TODO: Need to be sent from api
            });

            isGoogleApiLoaded = true;

            resolve();
        };

        // Load the Google script
        $script(GOOGLEAPI_CDN_URL, () => {
        });
    });
}

async function sendAuthRequestToGoogle(): Promise<string> {
    await initGoogleAPI();

    return await new Promise<string>((resolve, reject) => {
        gapi.auth.authorize({
                client_id: '445973792215-f7iin0g2ed8iouaeeq0s7cag8io6nhug.apps.googleusercontent.com', // TODO: Need to be sent from api
                scope: [
                    'https://www.googleapis.com/auth/userinfo.profile',
                    'https://www.googleapis.com/auth/userinfo.email'
                ],
                immediate: false
            },
            (authResult) => {
                if (authResult.error && authResult.error !== 'popup_closed_by_user') {
                    return reject(new Error(authResult.error));
                }

                resolve(authResult.access_token);
            }
        );
    });
}

async function signOutFromGoogle(): Promise<void> {
    await initGoogleAPI();

    gapi.auth.setToken(null);
    gapi.auth.signOut();
}