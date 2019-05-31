<template>
  <div class="cityMain">
     <div class="header">
       <span class="iconfont icon-city" @click="goback">&#xe624;</span>
        城市选择
     </div>
     <div class="main">
        <cityRight :letterlist="letterlist" v-on:parentLetter='parentLetter'></cityRight>
        <cityList :letterlist="letterlist" :letter="letter" :hotCityList="hotCityList"></cityList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
import cityList from '@/pages/city/compoents/cityList'
import cityRight from '@/pages/city/compoents/cityRight'
export default {
  name: '',
  created () {
    axios.get('/static/city.json').then(res => {
      const {cities, hotCities} = res.data.data
      this.hotCityList = hotCities
      this.letterlist = cities
    })
  },
  data () {
    return {
      letterlist: {},
      hotCityList: [],
      letter: ''
    }
  },
  mounted () {},
  computed: {},
  methods: {
    parentLetter (letter) {
      this.letter = letter
    },
    goback () {
      this.backfirst()
    },
    ...mapMutations([
      'backfirst'
    ])
  },
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
