<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <template v-else>
            <h3>Server Status</h3>
            <p>Server ID: {{ server.id }}</p>
            <p>Server Status: {{ server.status }}</p>
            <button class="btn btn-primary" @click="resetServerStatus">Reset status</button>
        </template>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data() {
        return {
            server: null
        }
    },
    methods: {
        resetServerStatus: function ($event) {
            event.target.blur();
            this.server.status = 'Normal';
        }
    },
    created() {
        eventBus.$on('serverClicked', (server) => {
            this.server = server;
        });
    }
}
</script>

<style>

</style>
