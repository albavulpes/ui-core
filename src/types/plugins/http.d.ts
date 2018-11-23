import Vue from 'vue';
import {AlbaVulpesApi} from '../../api';

declare module 'vue/types/vue' {
    interface Vue {
        readonly $http: InstanceType<AlbaVulpesApi>;
    }
}