<template>
    <li class="list-group-item">
        Server: {{ serverName }}
    </li>
</template>

<script>
export default {
    props: {
        serverName: [String, Number]
    }
}
</script>
