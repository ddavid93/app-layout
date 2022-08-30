import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import i18n from './plugins/i18n';
import router from '../src/router'
import App from './App.vue';
import vuetify from '../src/plugins/vuetify'
import axios from "axios";

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
        render: h => h(App),
    },
});

export const {bootstrap, mount, unmount, update} = app