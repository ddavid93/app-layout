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
        <!--        <CoreConfirm ref="confirm"/>-->
        <!--        <CoreMedia ref="media"/>-->
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
import {onMounted, ref} from 'vue'
import {Menu} from '@Yanovis/app-utils'

const {CoreToolbar, CoreFooter, CoreDrawer, CoreRunningTrackerOverlay} = components
const conf = ref(Menu.state)
onMounted(() => Menu.state$.subscribe(data => conf.value = data))
</script>