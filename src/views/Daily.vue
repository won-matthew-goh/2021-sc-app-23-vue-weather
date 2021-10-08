<template>
  <div class="daily-wrapper">
    <h2 class="city-wrap">
      {{ GET_DAILY }}
    </h2>
    <div class="img-wrap">
      <img src="" alt="">
    </div>
    <div class="temp-wrap">
      {{  }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Daily',
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAILY'])
  },
  watch: {
    GET_COORDS: function (v, ov) {
      v.lang = navigator.language || navigator.userLanguage
      this.$store.dispatch('ACT_DAILY', v)
    },
    GET_DAILY: function (v, ov) {
      console.log(v)
    }
  },
  async created () {
    this.$store.dispatch('ACT_COORDS')
  }
}
</script>

<style lang="scss" scoped>

</style>
