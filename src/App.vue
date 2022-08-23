<template>
    <v-app v-if="$auth.ready()">
        <CoreToolbar v-if="$auth.check()"/>

        <!--        <core-running-tracker-overlay v-if="$auth.check()"></core-running-tracker-overlay>-->

        <div v-if="!$auth.ready()">
            <loading :active="!$auth.ready()" :is-full-page="true"></loading>
        </div>

        <CoreDrawer :dynamic="menu"/>

        <CoreFooter/>

        <!--        <CoreSnackbar/>-->
        <!--        <CoreConfirm ref="confirm"/>-->
        <!--        <CoreMedia ref="media"/>-->
    </v-app>

</template>

<script setup>
import {components} from '@Yanovis/app-components'
import Loading from 'vue-loading-overlay'
import i18n from '../src/plugins/i18n'

const menu = [
    {
        show: true,
        // show: this.$auth.check('act.service.index'),
        route: 'activities.services',
        icon: '$vuetify.icons.ynv-calendar',
        title: i18n.t('activities.services.servicesDescription')
    },
    {
        show: true,
        // show: this.$auth.check('book.order.create'),
        route: 'activities.bookings',
        icon: '$vuetify.icons.ynv-cart',
        title: i18n.t('activities.services.booking.bookingDescription')
    },
    {
        show: true,
        // show: this.$auth.check('book.order.index'),
        route: 'activities.orders',
        icon: '$vuetify.icons.ynv-person-circle',
        title: i18n.t('activities.order.orderDescription')
    }
]
const {CoreToolbar, CoreFooter, CoreDrawer} = components
</script>