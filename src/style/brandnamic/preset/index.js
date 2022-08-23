import colors from "vuetify/lib/util/colors";
import icons from "./icons";

const ynvColorPalette = {
    light: {
        action: {
            "primary": "#1E5AAC", // #E53935
            "secondary": '#424242',
            "accent": '#82B1FF',
            "error": '#DD4040',
            "info": '#2196F3',
            "success": '#69A94F',
            "warning": '#E58B06',
        }
    }
};

const preset = {
    theme: {
        dark: false,
        themes: {
            light: {
                "light": "#fff",
                "app_grey": "#9A9A9A",
                "dark": "#202328", // #E53935
                "primary": ynvColorPalette.light.action.primary, // #E53935
                "secondary": ynvColorPalette.light.action.secondary,
                "accent": ynvColorPalette.light.action.accent,
                "error": ynvColorPalette.light.action.error,
                "info": ynvColorPalette.light.action.info,
                "success": ynvColorPalette.light.action.success,
                "warning": ynvColorPalette.light.action.warning,
                "crm-red": {'base': "#D81A1A"},
                "crm-orange": {'base': "#F1943C"},
                "crm-yellow": {'base': "#FDD600"},
                "crm-green-light": {'base': "#9BC448"},
                "crm-green": {'base': "#1E811A"},
                "crm-grey": {'base': "#A5A5A8"},
                "crm-chip": {'base': "#54A1D1"},
                "crm-button": {'base': "#312700",},
                "ynv-c-title": {
                    'base': "#434343",
                },
                "ynv-c-subtitle": {
                    'base': "#9EA0A5",
                },
                "ynv-c-basic": {
                    'base': colors.grey.base,
                },
                "ynv-c-show": {
                    'base': ynvColorPalette.light.action.primary,
                },
                "ynv-c-edit": {
                    'base': '#959595',
                },
                "ynv-c-delete": {
                    'base': '#959595',
                },
                "ynv-c-copy": {
                    'base': '#959595',
                },
                "ynv-c-action": {
                    'base': ynvColorPalette.light.action.success,
                },
                "ynv-c-chat": {
                    'base': '#f5ce0a',
                },
                "ynv-c-whatsapp": {
                    'base': '#69a964',
                },
                "ynv-c-email": {
                    'base': '#E58B06',
                },
                "ynv-bg-chat": {
                    'base': '#FBF0C7',
                },
                "ynv-bg-whatsapp": {
                    'base': '#DFECD9',
                },
                "ynv-bg-email": {
                    'base': '#F9E5C6',
                },
                "ynv-c-admin": {
                    'base': '#919191',
                },
                "ynv-c-newsletter": {
                    'base': '#118F9A',
                },
                "ynv-c-zerberus": {
                    'base': '#5C3394',
                },
                "ynv-c-pay": {
                    'base': '#69A94F',
                },
                "ynv-c-activities": {
                    'base': '#E58B06',
                },
                "ynv-c-profiling": {
                    'base': '#BA4101',
                },
                "ynv-c-communication": {
                    'base': '#1E5AAC',
                },
                "ynv-c-support": {
                    'base': '#919191',
                },
                "ynv-c-checkin": {
                    'base': '#1E5AAC'
                },
                "ynv-c-sales": {
                    'base': '#1E5AAC'
                },
                "ynv-c-cm": {
                    'base': '#BCA101',
                },
                "ynv-c-ticketing": {
                    'base': "#006400"
                },
                "ynv-c-bcm": {
                    'base': '#115959',
                },
            },
            dark: {
                "light": "#fff",
                "dark": "#202328", // #E53935
                "app_grey": "#9A9A9A",
                "primary": ynvColorPalette.light.action.primary, // #E53935
                "secondary": ynvColorPalette.light.action.secondary,
                "accent": ynvColorPalette.light.action.accent,
                "error": ynvColorPalette.light.action.error,
                "info": ynvColorPalette.light.action.info,
                "success": ynvColorPalette.light.action.success,
                "warning": ynvColorPalette.light.action.warning,
                "crm-red": {'base': "#D81A1A"},
                "crm-orange": {'base': "#F1943C"},
                "crm-yellow": {'base': "#FDD600"},
                "crm-green-light": {'base': "#9BC448"},
                "crm-green": {'base': "#1E811A"},
                "crm-grey": {'base': "#A5A5A8"},
                "crm-chip": {'base': "#54A1D1"},
                "crm-button": {'base': "#312700",},
                "ynv-c-title": {
                    'base': "#434343",
                }, "ynv-c-subtitle": {
                    'base': "#9EA0A5",
                },
                "ynv-c-basic": {
                    'base': colors.grey.base,
                },
                "ynv-c-show": {
                    'base': ynvColorPalette.light.action.primary,
                },
                "ynv-c-edit": {
                    'base': '#959595',
                },
                "ynv-c-delete": {
                    'base': '#959595',
                },
                "ynv-c-copy": {
                    'base': '#959595',
                },
                "ynv-c-action": {
                    'base': ynvColorPalette.light.action.success,
                },
                "ynv-c-chat": {
                    'base': '#f5ce0a',
                },
                "ynv-c-whatsapp": {
                    'base': '#69a964',
                },
                "ynv-c-email": {
                    'base': '#E58B06',
                },
                "ynv-bg-chat": {
                    'base': '#FBF0C7',
                },
                "ynv-bg-whatsapp": {
                    'base': '#DFECD9',
                },
                "ynv-bg-email": {
                    'base': '#F9E5C6',
                },
                "ynv-c-admin": {
                    'base': '#919191',
                },
                "ynv-c-newsletter": {
                    'base': '#118F9A',
                },
                "ynv-c-zerberus": {
                    'base': '#5C3394',
                },
                "ynv-c-pay": {
                    'base': '#69A94F',
                },
                "ynv-c-activities": {
                    'base': '#E58B06',
                },
                "ynv-c-profiling": {
                    'base': '#BA4101',
                },
                "ynv-c-communication": {
                    'base': '#1E5AAC',
                },
                "ynv-c-cm": {
                    'base': '#BCA101',
                },
                "ynv-c-ticketing": {
                    'base': "#006400"
                },
                "ynv-c-bcm": {
                    'base': "#115959",
                },
            },
        },
        options: {
            customProperties: true,
        },

    },
    icons
};

export {preset};
