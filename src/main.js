console.log('%c App-Layout Loaded', 'background: #222; color: #bada55')

import VueRouter from "vue-router";
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import {mixin, i18n} from "@Yanovis/app-initial";

Vue.config.productionTip = false;
const app = singleSpaVue({
        Vue,
        appOptions: {
            i18n,
            vuetify: Vue.prototype.$vuetify,
            router: new VueRouter({mode: "history"}),
            mixins: [mixin.authMixin],
            render: h => h(App),
        },
    })
;


export const {bootstrap, mount, unmount, update} = app