<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item :serverName="server" v-for="server in servers" :key="server"/>
        </ul>
    </div>
</template>

<script>
import ServerItem from './ServerItem.vue';

export default {
    props: {
        servers: Array
    },
    components: {
        'server-item': ServerItem
    }
}
</script>
