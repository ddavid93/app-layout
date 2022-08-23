<template>
    <div v-if="$auth.ready()" class="layout v-application">
        <CoreToolbar v-if="$auth.check()"/>

        <!--        <core-running-tracker-overlay v-if="$auth.check()"></core-running-tracker-overlay>-->

        <div v-if="!$auth.ready()">
            <loading :active="!$auth.ready()" :is-full-page="true"></loading>
        </div>

        <CoreFooter/>

        <!--        <CoreSnackbar/>-->
        <!--        <CoreConfirm ref="confirm"/>-->
        <!--        <CoreMedia ref="media"/>-->
    </div>
</template>

<script setup>
import {components} from '@Yanovis/app-components'
import Loading from 'vue-loading-overlay'

const {CoreToolbar, CoreFooter} = components
</script>

<style>
.layout {
    background: #E7EAEE
}
</style>