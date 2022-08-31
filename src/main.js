import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import i18n from './plugins/i18n';
import router from '../src/router'
import App from './App.vue';
import vuetify from '../src/plugins/vuetify'
import axios from "axios";
import {AuthService, Settings} from '@Yanovis/app-utils'
import './reactivity'
import {loadingRef, userRef} from "@/reactivity";
import {distinctUntilChanged, tap} from "rxjs";

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
        computed: {
            isMobile: function () {
                return this.$vuetify.breakpoint.width < 769;
            }
        },
        mounted() {
            AuthService.loading$.subscribe((data) => loadingRef.value = !data)
            AuthService.user$.subscribe((data) => userRef.value = data)
            Settings.state$
                .pipe(
                    distinctUntilChanged(),
                    tap((data) => {
                        if (data.isBnPreset && !data.persistentDrawer) {
                            Settings.state = {
                                ...Settings.state,
                                persistentDrawer: true
                            }
                        }
                    }))
                .subscribe((data) => Object.keys(data).forEach(key => this.$settings[key] = data[key]))
        },
        render: h => h(App),
    },
});

export const {bootstrap, mount, unmount, update} = app