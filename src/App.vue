<template>
    <v-app v-if="$auth.ready()">
        <CoreToolbar v-if="$auth.check()"/>

        <!--        <core-running-tracker-overlay v-if="$auth.check()"></core-running-tracker-overlay>-->

        <div v-if="!$auth.ready()">
            <Loading
                :active="!$auth.ready()"
                :is-full-page="true"
            />
        </div>

        <CoreDrawer
            v-if="canPaintCoreDrawer"
            :dynamic="conf"
        />

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
import {Menu} from '@Yanovis/app-utils'
import router from '@/router'

const {CoreToolbar, CoreFooter, CoreDrawer} = components
const excludePaths = (val) => ['/', '/login', '/auth', '/403'].includes(val)
const canPaintCoreDrawer = ref(!excludePaths(router.currentRoute.path))
const conf = ref(Menu.state)
onMounted(() => {
    Menu.state$.subscribe(data => conf.value = data)
    router.beforeEach(({path}, from, next) => {
        canPaintCoreDrawer.value = !excludePaths(path)
        next()
    })
})
</script>