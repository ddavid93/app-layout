import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from '@/i18n'

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'en',
    legacy: true,
    fallbackLocale: 'en',
    messages,
});

export default i18n;
