<template>
  <div class=" wapperMain" ref="wapper">
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
</template>

<script>
import Bsceoll from 'better-scroll'
export default {
  name: '',
  data () {
    return {
    }
  },
  props: ['letterList', 'hotCityList'],
  methods: {},
  mounted () {
    new Bsceoll(this.$refs.wapper)
  }
}
</script>
<style lang='less' scoped>
    .wapperMain{
        position: absolute;
        top:.9rem;
        bottom:0;
        right:0;
        left:0;
        overflow: hidden;
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
