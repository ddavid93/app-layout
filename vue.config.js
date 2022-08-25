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
            'vue-axios',
            'vue',
            'vuetify',
            'vee-validate',
            'vue-router',
            'single-spa',
            "rxjs",
            "rxjs/operators",
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
