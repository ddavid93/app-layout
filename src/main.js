console.log('%c App-Layout Loaded', 'background: #222; color: #bada55')

import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import router from '../src/router'
import App from './App.vue';
import {authMixin, i18n, vuetify} from "@Yanovis/app-components";

Vue.config.productionTip = false;

const app = singleSpaVue({
    Vue,
    appOptions: {
        i18n,
        vuetify,
        router,
        mixins: [authMixin],
        render: h => h(App),
    },
});


export const {bootstrap, mount, unmount, update} = app