import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import i18n from './plugins/i18n';
import router from '../src/router'
import App from './App.vue';
import vuetify from '../src/plugins/vuetify'
import axios from "axios";
import {AuthService} from '@Yanovis/app-utils'
import './reactivity'
import {loadingRef, userRef} from "@/reactivity";

Vue.config.productionTip = false;
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Vue.prototype.$auth.getToken()}`
    return config;
}, (error) => Promise.reject(error));

const app = singleSpaVue({
    Vue,
    appOptions: {
        i18n,
        vuetify,
        router,
        mounted() {
            AuthService.loading$.subscribe((data) => loadingRef.value = !data)
            AuthService.user$.subscribe((data) => userRef.value = data)
        },
        render: h => h(App),
    },
});

export const {bootstrap, mount, unmount, update} = app