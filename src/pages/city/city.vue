<template>
  <div class="cityMain">
     <div class="header">
       <span class="iconfont icon-city">&#xe624;</span>
        城市选择
     </div>
     <div class="main wapperMain" ref="wapper">
      <div>
        <div class="city-main">
          <h3 class="hot-title">热门城市</h3>
          <div class="city-item">
            <div class="city-item-is border-topright" v-for="item in hotCityList" :key="item.id">{{item.name}}</div>
          </div>
        </div>
        <div class="letter-main">
          <div class="city-main" v-for="(i, k) of letterList" :key="k">
            <h3 class="hot-title">{{k}}</h3>
            <div class="city-item">
              <div class="city-item-is border-topright" v-for="letter of i" :key="letter.id">{{letter.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bsceoll from 'better-scroll'
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
  mounted () {

    new Bsceoll(this.$refs.wapper)
  }
}
</script>
<style lang='less' scoped>
@import '~@/assets/css/varibles.less';
.wapperMain{
      position: absolute;
      top:.9rem;
      bottom:0;
      right:0;
      left:0;
      overflow: hidden;
}
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
      .city-main{
        width:100%;
        color:#000000;
        .hot-title{
          font-size:.2rem;
          padding:.2rem 0;
          padding-left:.3rem;
          background-color: #eeeeee;;
        }
        .city-item{
          display:flex;
          width:100%;
          flex-wrap:wrap;
          .city-item-is{
            text-align:center;
            padding:.2rem 0;
            flex:0 0 33.33%;
          }
        }
      }
    }
</style>
