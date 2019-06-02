<template>
  <div class="gallary" @click="hidegallary">
    <div class="wapper">
     <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in images" :key="index"><img class="swiper-img" :src="item" /></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    hidegallary () {
      this.$emit('hidegallary')
    }
  }
}
</script>
<style lang='less'>
    .wapper /deep/ .swiper-container{overflow:inherit;}
   .gallary{
     position:fixed;
     display:flex;
     top:0;
     overflow: hidden;
     left:0;
     right:0;
     bottom:0;
     flex-direction:column;
     justify-content:center;
     background-color:#000000;
     .wapper{
       width:100%;
       height:4rem;
       img{
         width:100%;
       }
       .swiper-pagination{
         color:#ffffff;
         bottom:-1rem;
       }
     }
   }
</style>
