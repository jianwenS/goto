<template>
  <div>
    <swiper :options="icon">
        <swiper-slide v-for="(item,index) in page" :key="index">
          <ul class="icon-main">
              <li v-for="(i,index) in item" :key="index">
                <img :src="i.url"/>
                <p>{{i.text}}</p>
              </li>
          </ul>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      icon: {
        loop: false
      },
      dataList: [{
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      }, {
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
        text: '北京一日游'
      }, {
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        text: '北京必游'
      }, {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        text: '溜娃儿'
      }, {
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
        text: '爬长城'
      }, {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        text: '故宫'
      }, {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        text: '动植物园'
      }, {
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png',
        text: '每周好货'
      }, {
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
        text: '北京世园会'
      }, {
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        text: '北京欢乐谷'
      }]
    }
  },
  computed: {
    page () {
      const page = []
      this.dataList.forEach((item, index) => {
        let i = Math.floor(index / 8)
        if (!page[i]) {
          page[i] = []
        }
        page[i].push(item)
      })
      return page
    }
  },
  methods: {}
}
</script>
<style lang='less' scoped>
  .icon-main{
    display:flex;
    width:100%;
    flex: 1;
    flex-wrap:wrap;
    li{
      flex: 0 0 25%;
      padding:.1rem 3%;
      box-sizing: border-box;
      text-align:center;
      img{
        width:100%;
      }
    }
  }
</style>
