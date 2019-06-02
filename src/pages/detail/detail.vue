<template>
  <div>
    <detail-header></detail-header>
    <gallary :images="images" v-show="showGallary" @hidegallary="hidegallary"></gallary>
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
export default {
  name: '',
  data () {
    return {
      images: ['http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg', 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg', 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg'],
      showGallary: false,
      textList: [{
        isshow: true,
        title: '颐和园门票+导游讲解服务',
        children: [{
          title: '成人票',
          isshow: true,
          children: [{
            title: '成人+苏州街套票',
            isshow: true
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
    detailList
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
