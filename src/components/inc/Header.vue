<template>
  <header class="header-wrapper">
    <Logo />
    <Nav />
  </header>
</template>

<script>
import Nav from './Nav.vue'
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: { Nav, Logo },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include flex($h: space-between);
  background-color: $secondary-color;
  color: $white-color;
  font-size: 1.5em;
}
</style>
