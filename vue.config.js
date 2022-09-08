const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        "vuetify"
    ],
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/style/` + process.env.VUE_APP_PRESET + `/preset/variables.scss"`
            },
            scss: {
                additionalData: ``
            },

        }
    },
    chainWebpack: config => {
        config.externals([
            'vue-i18n',
            'axios',
            'vue-axios',
            'vue',
            'vuex',
            'vuetify',
            'vee-validate',
            'vue-router',
            'single-spa',
            "rxjs",
            "@Yanovis/app-utils",
            "@Yanovis/app-yanovis",
            "@Yanovis/app-components"
        ]);
    },
    configureWebpack: {
        output: {
            libraryTarget: 'system',
        },
    },
})
