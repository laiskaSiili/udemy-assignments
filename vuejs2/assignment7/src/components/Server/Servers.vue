<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    :id="index" 
                    class="list-group-item"
                    v-for="(server, index) in servers" :key="index"
                    @click='serverClicked'>
                Server #{{ server.id }}
                <div class="statusNotification">
                    {{ server.status }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function() {
        return {
            servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Critical' },
                    { id: 5, status: 'Normal' }
                ]
        }
    },
    methods: {
        serverClicked: function($event) {
            eventBus.$emit('serverClicked', this.servers[$event.target.id]);
            Array.from(document.getElementsByTagName('li')).forEach(item => {
                item.classList.remove('selected');
            });
            $event.target.classList.add('selected');
        }
    }
}
</script>

<style scoped>
    li {
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
    }
    
    li:hover {
        background-color: #eaeaea;
    }

    li.selected {
        background-color: #cecece;
    }

    .statusNotification {
        float: right;
        color: grey;
        font-size: 0.8em;
    }
</style>
