<template>
  <div>
    <h1>Count: {{ counter }}</h1>
    <button @click="updateCounter">카운트 올리기</button>
    <button @click="getLocation">위치정보 가져오기</button>
    <h2>{{ getLat }} / {{ getLon }}</h2>
  </div>
</template>

<script>
import { apiCoords } from './api/api-coords'

export default {
  name: 'Getters01',
  data () {
    return {
      count: 0,
      lat: 0,
      lon: 0
    }
  },
  computed: {
    counter: function () {
      return this.count + ' 입니다.'
    },
    getLat: function () {
      return `위도: ${this.lat.toFixed(4)}`
    },
    getLon: function () {
      return `경도: ${this.lon.toFixed(4)}`
    }
  },
  methods: {
    updateCounter () {
      this.count++
    },
    async getLocation () {
      try {
        const { coords } = await apiCoords()
        this.lat = coords.latitude
        this.lon = coords.longitude
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
