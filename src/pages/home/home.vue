<template>
    <div>
      <home-header></home-header>
      <swiper></swiper>
      <icon></icon>
      <like></like>
    </div>
</template>
<script>
import homeHeader from '@/pages/home/compoents/header'
import swiper from '@/pages/home/compoents/swiper'
import icon from '@/pages/home/compoents/icon'
import like from '@/pages/home/compoents/like'
export default {
  data () {
    return {}
  },
  components: {
    homeHeader,
    swiper,
    icon,
    like
  }
}
</script>

<style lang="less" scoped>

</style>
