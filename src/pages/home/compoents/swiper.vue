<template>
  <div>
    <div class="wapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in imgList" :key="item.id"><img class="swiper-img" :src="item.url" /></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          id: 1,
          url: 'https://pic.tujia.com/upload/resourcespic/day_190513/201905131907058235.jpg'
        },
        {
          id: 2,
          url: 'https://pic.tujia.com/upload/resourcespic/day_190517/201905171548442918.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .wapper /deep/ .swiper-pagination-bullet-active{background: #ffffff !important;}
  .wapper{
    .swiper-img{width:100%;height:100%;}
  }
</style>
