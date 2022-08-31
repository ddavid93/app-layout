import Vue, {reactive, ref} from "vue";
import {AuthService, Settings} from '@Yanovis/app-utils'

export const userRef = ref(AuthService.user)
export const loadingRef = ref(AuthService.loading)

Vue.prototype.$auth = reactive(
    {
        ready() {
            return loadingRef.value
        },
        user() {
            return userRef.value
        },
        ...AuthService
    }
)

Vue.prototype.$settings = reactive(Settings.state)