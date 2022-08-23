import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from './i18n'
import {components} from '@Yanovis/app-components'

const {
    CustomTextField,
    CustomTextarea,
    CustomSelect,
    CustomAutocomplete,
    CustomCombobox,
    CustomCoreRedactor,
    CustomSwitch
} = components
import('@/style/' + process.env.VUE_APP_PRESET + '/preset/overrides.sass');

Vue.use(Vuetify, {
    components: {
        CustomTextField,
        CustomTextarea,
        CustomSelect,
        CustomAutocomplete,
        CustomCombobox,
        CustomCoreRedactor,
        CustomSwitch
    }
});
let preset = {};
switch (process.env.VUE_APP_PRESET) {
    case 'yanovis':
        preset = require('@/style/yanovis/preset').preset;
        break;
    case 'brandnamic':
        preset = require('@/style/brandnamic/preset').preset;
        break;
}

export default new Vuetify({
    preset,
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
});
