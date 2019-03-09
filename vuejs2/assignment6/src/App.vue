<template>
    <div class="container">
        <vue-header :headerMsg="headerMsg" />
        <hr>
        <div class="row">
            <server-list :servers="servers"/>
            <server-update :updateMsg="serverDetails"/>
        </div>
        <hr>
        <vue-footer :footerMsg="footerMsg"/>
    </div>
</template>

<script>
import VueFooter from './components/VueFooter.vue';
import VueHeader from './components/VueHeader.vue';
import ServerUpdate from './components/ServerUpdate.vue';
import ServerList from './components/ServerList.vue'

export default {
    data: function() {
        return {
            servers: ['MickeyCH', 'BalooDE', 'HelloJudyUS', 'BeerBottleHUN'],
            serverDetails: 'Server Details are currently not updated',
            headerMsg: 'Server Status',
            footerMsg: 'All Servers are managed here'
        }
    },
    components: {
        'vue-footer': VueFooter,
        'vue-header': VueHeader,
        'server-update': ServerUpdate,
        'server-list': ServerList
    }
}
</script>

<style>

</style>
