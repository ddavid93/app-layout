<template>
    <v-app v-if="$auth.ready()">
        <CoreToolbar v-if="$auth.check()"/>

        <!--        <core-running-tracker-overlay v-if="$auth.check()"></core-running-tracker-overlay>-->

        <div v-if="!$auth.ready()">
            <loading :active="!$auth.ready()" :is-full-page="true"></loading>
        </div>

        <CoreDrawer :dynamic="conf"/>

        <CoreFooter/>

        <!--        <CoreSnackbar/>-->
        <!--        <CoreConfirm ref="confirm"/>-->
        <!--        <CoreMedia ref="media"/>-->
    </v-app>

</template>

<script setup>
import {components} from '@Yanovis/app-components'
import Loading from 'vue-loading-overlay'
import {onMounted, ref} from 'vue'
import {menu} from '@Yanovis/app-utils'

const {CoreToolbar, CoreFooter, CoreDrawer} = components
const conf = ref(menu.menu)

onMounted(() => menu.menu$.subscribe(data => conf.value = data))
</script>