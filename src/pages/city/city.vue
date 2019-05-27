<template>
  <div class="cityMain">
     <div class="header">
       <span class="iconfont icon-city">&#xe624;</span>
        城市选择
     </div>
     <div class="main">
        <cityRight :letterList="letterList"></cityRight>
        <cityList :letterList="letterList" :hotCityList="hotCityList"></cityList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cityList from '@/pages/city/compoents/cityList'
import cityRight from '@/pages/city/compoents/cityRight'
export default {
  name: '',
  created () {
    axios.get('/static/city.json').then(res => {
      const {cities, hotCities} = res.data.data
      this.hotCityList = hotCities
      this.letterList = cities
    })
  },
  data () {
    return {
      letterList: {},
      hotCityList: []
    }
  },
  methods: {},
  components: {
    cityList,
    cityRight
  }
}
</script>
<style lang='less' scoped>
@import '~@/assets/css/varibles.less';
    .cityMain{
      .header{
        background-color:@bgColor;
        position: relative;
        z-index:99;
        text-align: center;
        color:#ffffff;
        padding:.3rem;
        font-size:.3rem;
        .icon-city{
          position: absolute;
          left:.2rem;
        }
      }
    }
</style>
