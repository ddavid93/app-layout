import VueRouter from "vue-router";
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import {authMixin, i18n, vuetify} from "@Yanovis/app-components";

console.log('%c App-Layout Loaded', 'background: #222; color: #bada55')

Vue.config.productionTip = false;

const app = singleSpaVue({
        Vue,
        appOptions: {
            i18n,
            vuetify,
            router: new VueRouter({mode: "history"}),
            mixins: [authMixin],
            render: h => h(App),
        },
    })
;


export const {bootstrap, mount, unmount, update} = app