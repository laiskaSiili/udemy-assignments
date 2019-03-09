<template>
  <div class="row">
      <div class="col-xs-12">
          <footer>
              <p>{{ footerMsg }}</p>
          </footer>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    footerMsg: String
  }
}
</script>

<style scoped>
</style>
