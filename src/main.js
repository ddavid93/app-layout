import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import i18n from './plugins/i18n';

import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        i18n,
        data() {
            return {
                fullscreen: false,
            };
        },
        async mounted() {
            await this.$auth.fetch({})
        },
        computed: {
            isMobile: function () {
                return this.$vuetify.breakpoint.width < 769;
            },
            appPreset() {
                return process.env.VUE_APP_PRESET;
            },
            isBnPreset() {
                return this.appPreset === 'brandnamic';
            },
        },
        render: h => h(App),
    },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
