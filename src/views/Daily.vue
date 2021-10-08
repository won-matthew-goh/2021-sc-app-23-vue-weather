<template>
  <div class="daily-wrapper">
    <City :styled="{ size: '2em', color: 'blue' }" :name="city" class="city" />
    <Icon :styled="{ width: '150px' }" :src="src" class="icon" />
    <Temp :styled="{ size: '1.5em', color: '#f9f9f9' }" :temp="temp" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getIcon } from '../modules/util'

import City from '../components/City.vue'
import Icon from '../components/Icon.vue'
import Temp from '../components/Temp.vue'

export default {
  name: 'Daily',
  components: { City, Icon, Temp },
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAILY']),
    city: function () {
      return (this.GET_DAILY.cod === 200)
        ? `${this.GET_DAILY.name}, ${this.GET_DAILY.sys.country}`
        : ''
    },
    src: function () {
      return (this.GET_DAILY.cod === 200)
        ? getIcon(this.GET_DAILY.weather[0].icon)
        : 'https://via.placeholder.com/50x50?txt=No+Icon'
    },
    temp: function () {
      return (this.GET_DAILY.cod === 200)
        ? this.GET_DAILY.main.temp + '℃'
        : ''
    }
  },
  watch: {
    GET_COORDS: function (v, ov) {
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
.daily-wrapper {
  @include flex($h: center, $v: center);
  @include flexCol;
  .city {
    margin-bottom: 1em;
  }
  .icon {
    margin-bottom: 1em;
  }
}
</style>
