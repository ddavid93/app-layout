import {components} from '@Yanovis/app-components'

const {CoreSvgIcons} = components

import * as ionicIcons from 'ionicons/icons/index.js'
import * as ynvIcons from "@/icons";


function buildSvgIcons(names) {
    const icons = {}
    for (const name in names) {
        icons[name] = {
            component: CoreSvgIcons,
            props: {
                svg: names[name]
            }
        }
    }
    return icons;
}

const defaultIconsSet = {
    complete: ionicIcons.checkmarkOutline,
    cancel: ionicIcons.closeCircle,
    close: ionicIcons.close,
    delete: ionicIcons.closeCircle,
    clear: ionicIcons.close,
    success: ionicIcons.checkmarkCircle,
    info: ionicIcons.informationCircle,
    warning: ionicIcons.alert,
    error: ionicIcons.warning,
    prev: ionicIcons.chevronBackOutline,
    next: ionicIcons.chevronForwardOutline,
    checkboxOn: ionicIcons.checkbox,
    checkboxOff: ionicIcons.squareOutline,
    //checkboxIndeterminate: 'mdi-minus-box', // NOT FOUND
    delimiter: ionicIcons.ellipse,
    sort: ionicIcons.arrowDownOutline,
    menu: ionicIcons.menuOutline,
    subgroup: ionicIcons.chevronDownOutline,
    dropdown: ionicIcons.caretDownOutline,
    expand: ionicIcons.chevronDownOutline,
    radioOn: ionicIcons.radioButtonOn,
    radioOff: ionicIcons.radioButtonOff,
    edit: ionicIcons.createOutline,
    ratingEmpty: ionicIcons.starOutline,
    ratingFull: ionicIcons.star,
    ratingHalf: ionicIcons.starHalf,
    loading: ionicIcons.reloadOutline,
    first: ionicIcons.playSkipBackOutline,
    last: ionicIcons.playSkipForwardOutline,
    //unfold: 'mdi-unfold-more-horizontal', // NOT FOUND
    file: ionicIcons.documentAttachOutline,
    plus: ionicIcons.addOutline,
    minus: ionicIcons.removeOutline,
    swapVerticalOutline: ionicIcons.swapVerticalOutline,
};

const YNV_ICONS_SVG = {

    "ynv-drag-outline": ionicIcons.moveOutline,
    "ynv-apps": ynvIcons.apps,
    "ynv-home": ionicIcons.homeOutline,
    "ynv-globe-outline": ionicIcons.globeOutline,

    "ynv-person": ionicIcons.personOutline,
    "ynv-person-circle": ionicIcons.personCircleOutline,
    "ynv-person-add": ionicIcons.personAddOutline,
    "ynv-person-remove": ionicIcons.personRemoveOutline,
    "ynv-people": ionicIcons.peopleOutline,

    "ynv-business": ionicIcons.businessOutline,

    "ynv-mail": ionicIcons.mailOutline,
    "ynv-email": ionicIcons.mailOutline,
    "ynv-mail-open": ionicIcons.mailOpenOutline,
    "ynv-mail-unread": ionicIcons.mailUnreadOutline,

    "ynv-menu-left": ionicIcons.caretBackOutline,
    "ynv-menu-right": ionicIcons.caretForwardOutline,
    "ynv-menu-up": ionicIcons.caretUpOutline,
    "ynv-menu-down": ionicIcons.caretDownOutline,

    "ynv-new-tab": ionicIcons.openOutline,

    "ynv-reload-circle": ionicIcons.reloadCircle,
    "ynv-puzzle": ionicIcons.extensionPuzzleOutline,

    "ynv-flash": ionicIcons.flashOutline,
    "ynv-document": ionicIcons.documentTextOutline,
    "ynv-documents-outline": ionicIcons.fileTrayStackedOutline,
    "ynv-calendar": ionicIcons.calendarOutline,
    "ynv-calendar-clear": ionicIcons.calendarClearOutline,
    "ynv-cart": ionicIcons.cartOutline,
    "ynv-cart-filled": ionicIcons.cart,
    "ynv-settings": ynvIcons.settings,
    "ynv-file": ionicIcons.attachOutline,

    "ynv-bulk-op-action": ionicIcons.cubeOutline,

    "ynv-plus": ionicIcons.addOutline,
    "ynv-plus-circle": ionicIcons.addCircleOutline,
    "ynv-minus": ionicIcons.removeOutline,
    "ynv-minus-circle": ionicIcons.removeCircleOutline,
    "ynv-remove-circle": ionicIcons.removeCircle,

    "ynv-backspace": ionicIcons.backspace,

    "ynv-close": ionicIcons.closeOutline,
    "ynv-close-circle": ionicIcons.closeCircleOutline,
    "ynv-close-circle-filled": ionicIcons.closeCircle,

    "ynv-chevron-down": ionicIcons.caretDownOutline,
    "ynv-chevron-up": ionicIcons.caretUpOutline,
    "ynv-chevron-left": ionicIcons.chevronBackOutline,
    "ynv-chevron-right": ionicIcons.chevronForwardOutline,

    "ynv-chevron-left-outline": ionicIcons.caretBackOutline,
    "ynv-chevron-down-outline": ionicIcons.caretDownOutline,
    "ynv-chevron-up-outline": ionicIcons.caretUpOutline,
    "ynv-chevron-right-outline": ionicIcons.caretForwardOutline,

    "ynv-options-dots": ionicIcons.ellipsisHorizontal,

    "ynv-arrow-down": ionicIcons.arrowDownOutline,
    "ynv-arrow-up": ionicIcons.arrowUpOutline,
    "ynv-arrow-left": ionicIcons.arrowBackOutline,
    "ynv-arrow-right": ionicIcons.arrowForwardOutline,

    "ynv-reservations": ionicIcons.bedOutline,
    "ynv-checkin": ionicIcons.calendarSharp,

    "ynv-eye": ionicIcons.eyeOutline,
    "ynv-eye-off": ionicIcons.eyeOffOutline,

    "ynv-archive": ionicIcons.archiveOutline,

    "ynv-folder": ionicIcons.folderOutline,
    "ynv-folder-open": ionicIcons.folderOpenOutline,

    "ynv-server-outline": ionicIcons.serverOutline,
    "ynv-flash-outline": ionicIcons.flashOutline,

    "ynv-folder-open-filled": ionicIcons.folderOpen,

    "ynv-dashboard": ionicIcons.barChartOutline,

    "ynv-messages": ionicIcons.chatbubblesOutline,
    "ynv-chat": ionicIcons.chatbubbleEllipsesOutline,
    "ynv-automation": ionicIcons.logoAndroid,

    "ynv-tags": ionicIcons.pricetagsOutline,

    "ynv-pencil": ynvIcons.edit,
    "ynv-bulb": ionicIcons.bulbOutline,

    "ynv-checkbox-blank-circle": ionicIcons.radioButtonOff,
    "ynv-checkbox-blank-circle-outline": ionicIcons.radioButtonOffOutline,

    "ynv-return-up-back-outline": ionicIcons.returnUpBackOutline,
    "ynv-return-up-forward-outline": ionicIcons.returnUpForwardOutline,

    "ynv-circle": ionicIcons.ellipse,
    "ynv-circle-outline": ionicIcons.ellipseOutline,

    "ynv-information-outline": ionicIcons.informationCircleOutline,
    "ynv-service-portal": ionicIcons.helpBuoy,
    "ynv-help": ionicIcons.heartOutline,
    "ynv-help-info": ionicIcons.helpCircleOutline,
    "ynv-help-circle": ionicIcons.helpCircle,
    "ynv-info": ionicIcons.informationOutline,
    "ynv-updates": ionicIcons.rocketOutline,

    "ynv-card-outline": ionicIcons.cardOutline,
    "ynv-cash-outline": ionicIcons.cashOutline,

    "ynv-clock": ynvIcons.clock,
    "ynv-clock-outline": ynvIcons.clock,

    "ynv-magnify": ionicIcons.searchOutline,
    "ynv-sales": ionicIcons.earthOutline,

    "ynv-fullScreen": ionicIcons.scanOutline,

    "ynv-check": ionicIcons.checkmarkOutline,
    "ynv-check-mark": ionicIcons.checkmarkDoneOutline,
    "ynv-check-circle": ionicIcons.checkmarkCircle,
    "ynv-check-circle-outline": ionicIcons.checkmarkCircleOutline,

    "ynv-checkbox-marked-outline": ionicIcons.checkboxOutline,
    "ynv-checkbox-blank-outline": ionicIcons.squareOutline,

    "ynv-shield": ionicIcons.shield,
    "ynv-shield-outline": ionicIcons.shieldOutline,
    "ynv-shield-check": ionicIcons.shieldCheckmark,
    "ynv-shield-half": ionicIcons.shieldHalfOutline,

    "ynv-trash-can-outline": ynvIcons.delete,

    "ynv-alert": ionicIcons.alert,
    "ynv-alert-outline": ionicIcons.alertOutline,
    "ynv-alert-circle": ionicIcons.alertCircle,
    "ynv-alert-circle-outline": ionicIcons.alertCircleOutline,

    "ynv-warning": ionicIcons.warning,

    "ynv-cloud-download-outline": ionicIcons.cloudDownloadOutline,
    "ynv-cloud-upload-outline": ionicIcons.cloudUploadOutline,
    "ynv-cloud-download": ionicIcons.cloudDownload,
    "ynv-cloud-upload": ionicIcons.cloudUpload,

    "ynv-desktop-outline": ionicIcons.desktopOutline,
    "ynv-cloud-outline": ionicIcons.cloudOutline,

    "ynv-download-outline": ionicIcons.downloadOutline,
    "ynv-code-download-outline": ionicIcons.codeDownloadOutline,

    "ynv-image-outline": ionicIcons.imageOutline,
    "ynv-images-outline": ionicIcons.imagesOutline,
    "ynv-camera-outline": ionicIcons.cameraOutline,

    "ynv-videocam-outline": ionicIcons.videocamOutline,
    "ynv-videocam": ionicIcons.videocam,
    "ynv-film": ionicIcons.film,

    "ynv-youtube": ionicIcons.logoYoutube,

    "ynv-bell": ynvIcons.bellNotification,

    "ynv-trophy": ionicIcons.trophy,

    "ynv-people-outline": ionicIcons.peopleOutline,

    "ynv-lock": ionicIcons.lockClosed,
    "ynv-lock-outline": ionicIcons.lockClosedOutline,
    "ynv-lock-open-outline": ionicIcons.lockOpenOutline,
    "ynv-lock-alert-outline": ionicIcons.lockOpenOutline, //not found

    "ynv-unlock": ionicIcons.lockOpen,
    "ynv-unlock-outline": ionicIcons.lockOpenOutline,
    "ynv-unlock-open-outline": ionicIcons.lockOpenOutline,
    "ynv-unlock-alert-outline": ionicIcons.lockOpenOutline, //not found

    "ynv-map-marker": ionicIcons.map,
    "ynv-map-marker-outline": ionicIcons.mapOutline,

    "ynv-location": ionicIcons.locationOutline,

    "ynv-star": ionicIcons.star,
    "ynv-star-outline": ionicIcons.starOutline,
    "ynv-star-half": ionicIcons.starHalf,

    "ynv-color-wand-outline": ionicIcons.colorWandOutline1,
    "ynv-gender-male-female-outline": ionicIcons.maleFemaleOutline,
    "ynv-cake": ionicIcons.calendar, // not found

    "ynv-language": ionicIcons.languageOutline,

    "ynv-phone": ionicIcons.callOutline,
    "ynv-city": ionicIcons.colorWandOutline,
    "ynv-hotel": ionicIcons.bedOutline,
    "ynv-bed": ionicIcons.bed,
    "ynv-text": ionicIcons.documentTextOutline,
    "ynv-text2": ionicIcons.textOutline,
    "ynv-document-outline": ionicIcons.documentOutline,
    "ynv-document-attach-outline": ionicIcons.documentAttachOutline,
    "ynv-power-sleep": ionicIcons.moon,

    "ynv-euro": ionicIcons.logoEuro,

    "ynv-filter-outline": ionicIcons.funnelOutline,
    "ynv-filter": ionicIcons.funnelOutline,
    "ynv-filter-remove": ionicIcons.funnelOutline,

    "ynv-bar-chart": ionicIcons.barChart,
    "ynv-bar-chart-outline": ionicIcons.barChartOutline,
    "ynv-pie-chart": ionicIcons.pieChart,
    "ynv-pie-chart-outline": ionicIcons.pieChartOutline,
    "ynv-stats-chart": ionicIcons.statsChart,
    "ynv-stats-chart-outline": ionicIcons.statsChartOutline,

    "ynv-crop-outline": ionicIcons.cropOutline,

    "ynv-gift": ionicIcons.giftOutline,
    "ynv-id-card": ionicIcons.idCardOutline,

    "ynv-refresh-outline": ionicIcons.refreshOutline,
    "ynv-refresh": ionicIcons.refresh,

    "ynv-repeat-outline": ionicIcons.repeatOutline,
    "ynv-repeat-sharp": ionicIcons.repeatSharp,
    "ynv-repeat": ionicIcons.repeat,

    "ynv-sync-outline": ionicIcons.syncOutline,

    "ynv-hourglass-outline": ionicIcons.hourglassOutline,
    "ynv-hourglass": ionicIcons.hourglass,

    "ynv-dots-outline": ionicIcons.ellipsisVerticalOutline,
    "ynv-dots": ionicIcons.ellipsisVertical,

    "ynv-paper-plane": ionicIcons.paperPlaneOutline,

    "ynv-earth": ionicIcons.earthOutline,

    "ynv-save": ionicIcons.saveOutline,

    "ynv-stop-circle": ionicIcons.stopCircleOutline,
    "ynv-play-circle": ionicIcons.playCircle,

    "ynv-list-dotted-outline": ionicIcons.listOutline,

    "ynv-cog": ionicIcons.cogOutline,

    "ynv-redo-outline": ionicIcons.arrowRedoOutline,
    "ynv-redo": ionicIcons.arrowRedo,
    "ynv-undo-outline": ionicIcons.arrowUndoOutline,
    "ynv-undo": ionicIcons.arrowUndo,
    "ynv-grid-outline": ionicIcons.gridOutline,

    "ynv-expand": ionicIcons.expandOutline,

    "ynv-file-tray-full": ionicIcons.fileTrayFullOutline,
    "ynv-file-tray": ionicIcons.fileTrayOutline,
    "ynv-swap-vertical-outline": ionicIcons.swapVerticalOutline,

    "ynv-whatsapp": ionicIcons.logoWhatsapp,

    "ynv-information-circle-outline": ionicIcons.informationCircleOutline,
    "ynv-information-circle": ionicIcons.informationCircle,

    "ynv-cubes": ynvIcons.appCubes,
    "ynv-subject": ynvIcons.subject,

    "ynv-hand": ionicIcons.handRightOutline,

    "ynv-accessibility": ionicIcons.body,

    "ynv-leaf": ionicIcons.leaf,

    "ynv-ribbon-outline": ionicIcons.ribbonOutline,
    "ynv-fingerprint-outline": ionicIcons.fingerPrintOutline,

    "ynv-book-outline": ionicIcons.bookOutline,

    "ynv-calculator-outline": ionicIcons.calculatorOutline,

    "ynv-cloudy-night-outline": ionicIcons.cloudyNightOutline,
    "ynv-man-standing": ynvIcons.manStanding,
    "ynv-double-paper": ynvIcons.doublePaper,
    "ynv-information-variant": ynvIcons.informationVariant,
    "ynv-up-down": ynvIcons.selection,
    "ynv-share-social": ionicIcons.shareSocial,
    "ynv-skull-outline": ionicIcons.skull,
    "ynv-ticket-outline": ionicIcons.ticketOutline,
    "ynv-ban-outline": ionicIcons.banOutline,
    "ynv-megaphone-outline": ionicIcons.megaphoneOutline,
    "ynv-thumbs-up-outline": ionicIcons.thumbsUpOutline,
    "ynv-thumbs-up": ionicIcons.thumbsUp,
    "ynv-shuffle-outline": ionicIcons.shuffleOutline,
    "ynv-build-outline": ionicIcons.buildOutline,
    "ynv-git-branch": ionicIcons.gitBranchOutline,
    "ynv-restaurant": ionicIcons.restaurant,
    "ynv-restaurant-outline": ionicIcons.restaurantOutline,
    "ynv-cm-restrictions-arrival_possible": ionicIcons.enterOutline,
    "ynv-cm-restrictions-closed": ionicIcons.closeCircleOutline,
    "ynv-cm-restrictions-open": ionicIcons.checkmarkCircleOutline,
    "ynv-cm-restrictions-departure_possible": ionicIcons.exitOutline,
    "ynv-cleaning": ynvIcons.cleaning,
    "ynv-id-card-outline": ionicIcons.idCardOutline,
    "ynv-moon-outline": ionicIcons.moonOutline,
    "ynv-location-outline": ionicIcons.locationOutline,
    "ynv-cart-outline": ionicIcons.cartOutline,
    "ynv-leaf-outline": ionicIcons.leafOutline,
    "ynv-trophy-outline": ionicIcons.trophyOutline,
    "ynv-diamond-outline": ionicIcons.diamondOutline,
    "ynv-calendar-number-outline": ionicIcons.calendarNumberOutline,
}

const icons = {
    iconfont: 'mdi',
    values: {
        ...buildSvgIcons(defaultIconsSet),
        ...buildSvgIcons(YNV_ICONS_SVG),
        ...buildSvgIcons({
            "ynv-menu": ionicIcons.menuOutline,
            "ynv-edit": ynvIcons.edit,
            "ynv-delete": ynvIcons.delete,
            "ynv-copy": ynvIcons.detail,
            "ynv-share": ionicIcons.shareSocialOutline,
            "ynv-show": ionicIcons.eyeOutline,
            "ynv-status": ionicIcons.ellipse,
            "ynv-refresh": ionicIcons.refreshCircleOutline,
            "ynv-loading": ionicIcons.reloadCircleOutline,
            "ynv-login": ionicIcons.logInOutline,
            "ynv-logout": ionicIcons.logOutOutline,
            "ynv-bee-plugin": ionicIcons.codeSlashOutline,
            "ynv-birthday-cake": ynvIcons.birthdayCake,
            "ynv-chat": ynvIcons.chat,
        }),
        ...buildSvgIcons({
            "ynv-app-activities": ynvIcons.appActivities,
            "ynv-app-admin": ynvIcons.appAdminBN,
            "ynv-app-communication": ynvIcons.appCommunicationBN,
            "ynv-app-newsletter": ynvIcons.appNewsletterBN,
            "ynv-app-pay": ynvIcons.appPayBN,
            "ynv-app-profiling": ynvIcons.appProfilingBN,
            "ynv-app-zerberus": ynvIcons.appZerberusBN,
            "ynv-app-support": ynvIcons.appSupport,
            "ynv-app-datahub": ynvIcons.appDatahub,
            "ynv-app-ticketing": ynvIcons.appTicketing,
            "ynv-app-bcm": ynvIcons.appCampaignManager,
            "ynv-app-cm": ionicIcons.earthOutline,
            "ynv-app-pms": ionicIcons.homeOutline,
        }),
    }
};
export default icons;
