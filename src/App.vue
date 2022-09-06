<template>
    <v-app style="height: 90px">
        <CoreToolbar v-if="$auth.check()"/>
        <CoreRunningTrackerOverlay v-if="$auth.check()"/>
        <CoreDrawer
            v-if="conf && $auth.check() && $route.path !== '/'"
            :dynamic="conf"
        />
        <CoreFooter/>

        <!--        <CoreSnackbar/>-->
        <CoreConfirm ref="confirm"/>
        <CoreHasChanged ref="hasChanged"/>
        <CoreMedia ref="media"/>
        <CoreMediPreview ref="mediaPreview"/>

        <div v-if="!$auth.ready">
            <Loading
                :active="true"
                :is-full-page="true"
            />
        </div>
    </v-app>

</template>

<script setup>
import {components} from '@Yanovis/app-components'
import Loading from 'vue-loading-overlay'
import Vue, {onMounted, ref} from 'vue'
import {Menu} from '@Yanovis/app-utils'

const {
    CoreToolbar,
    CoreFooter,
    CoreDrawer,
    CoreRunningTrackerOverlay,
    CoreConfirm,
    CoreHasChanged,
    CoreMedia,
    CoreMediPreview
} = components
const conf = ref(Menu.state)
const confirm = ref()
const hasChanged = ref()
const media = ref()
const mediaPreview = ref()
onMounted(() => {
    Menu.state$.subscribe(data => conf.value = data)
    Vue.prototype.$confirm = confirm.value
    Vue.prototype.$hasChanged = hasChanged.value
    Vue.prototype.$media = media.value
    Vue.prototype.$mediaPreview = mediaPreview.value
})
</script>