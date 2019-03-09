<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>{{ headerMsg }}</h1>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerMsg: String
    }
}
</script>
