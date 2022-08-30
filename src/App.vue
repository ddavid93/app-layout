<template>
    <v-app style="height: 90px">

        <div v-if="ready">
            <CoreToolbar v-if="check"/>
            <CoreRunningTrackerOverlay v-if="check"/>
            <CoreDrawer
                v-if="conf"
                :dynamic="conf"
            />
            <CoreFooter/>

            <!--        <CoreSnackbar/>-->
            <!--        <CoreConfirm ref="confirm"/>-->
            <!--        <CoreMedia ref="media"/>-->
        </div>
        <div v-if="!ready">
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

const auth = Vue.prototype.$auth
const {CoreToolbar, CoreFooter, CoreDrawer, CoreRunningTrackerOverlay} = components

const ready = ref(false)
const check = ref(auth.check())

const conf = ref(Menu.state)
onMounted(() => {

    Menu.state$.subscribe(data => conf.value = data)

    auth.user$.subscribe(() => {
        check.value = auth.check()
        ready.value = auth.ready()
    })
})
</script>