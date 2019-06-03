<template>
  <div>
    <detail-header></detail-header>
    <fade>
      <gallary :images="images" v-show="showGallary" @hidegallary="hidegallary"></gallary>
    </fade>
    <div class="detailImg" @click="showgallary">
      <img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg">
    </div>
    <detail-list :textList="textList" @handleshow="handleshow"></detail-list>
  </div>
</template>

<script>
import gallary from '@/pages/detail/gallary'
import detailHeader from '@/pages/detail/detailHeader'
import detailList from '@/pages/detail/list'
import fade from '@/pages/components/fade'
export default {
  name: '',
  data () {
    return {
      images: ['http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg', 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg', 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg'],
      showGallary: false,
      textList: [{
        isshow: false,
        title: '颐和园门票+导游讲解服务',
        children: [{
          title: '成人票',
          isshow: false,
          children: [{
            title: '成人+苏州街套票',
            isshow: false
          }]
        }]
      }]
    }
  },
  methods: {
    showgallary () {
      this.showGallary = true
    },
    hidegallary () {
      this.showGallary = false
    },
    handleshow (isshow) {

    }
  },
  components: {
    gallary,
    detailHeader,
    detailList,
    fade
  }
}
</script>
<style lang='less'>
  .detailImg{
    img{
      width: 100%;
    }
  }
</style>
