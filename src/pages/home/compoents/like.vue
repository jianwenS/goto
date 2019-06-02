<template>
  <div class="like-main">
    <div class="like-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"/>
      <span>猜你喜欢</span>
    </div>
    <ul class="like-bom">
         <li class="border-bottom" v-for="(item, index) in recommendList" :key="index" @click="goDetail(item.id)">
           <div class="like-bom-img">
             <img :src="item.imgUrl" />
           </div>
           <div class="like-bom-message">
             <p class="title">{{item.title}}</p>
             <p class="num">{{item.desc}}</p>
             <p class="price"><i>￥108</i>起<span>延庆</span></p>
           </div>
         </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    axios.get('/static/index.json').then(res => {
      const { recommendList } = res.data.data
      this.recommendList = recommendList
    })
  },
  name: '',
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>
<style lang='less' scoped>
  .like-main{
     padding:0 .5rem;
      .like-top{
        margin:.5rem 0;
        font-size:.3rem;
        img{
          width:.2rem;
        }
      }
      .like-bom{
        width: 100%;;
        li{
          display:flex;
          padding-bottom:.2rem;
          .like-bom-img{
            width:2rem;
            height:2rem;
            img{
              width:100%;
              height:100%;
            }
          }
          .like-bom-message{
            flex:1;
            font-size:.3rem;
            padding-left:.2rem;
            .title{
              font-size:.4rem;
              margin:.3rem 0;
            }
            .num{
              margin:.2rem 0;
              color:#cccccc;
            }
            .price{
              i{color:#ff8300;font-size:.4rem;}
              span{float:right;margin-top:.1rem;}
            }
          }
        }
      }
  }
</style>
