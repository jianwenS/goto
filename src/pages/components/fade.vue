<template>
  <transition>
     <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'fade',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang='less' scoped>
  .v-enter,.v-leave-to{
    opacity:0;
  }
  .v-enter-active,.v-leave-active{
    transition:1 .5s;
  }
</style>
