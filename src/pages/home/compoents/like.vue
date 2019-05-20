<template>
  <div class="like-main">
    <div class="like-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"/>
      <span>猜你喜欢</span>
    </div>
    <ul class="like-bom">
         <li class="border-bottom">
           <div class="like-bom-img">
             <img src="http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_200x200_50323152.jpg" />
           </div>
           <div class="like-bom-message">
             <p class="title">北京世界园艺博览会</p>
             <p class="num">5.6</p>
             <p class="price"><i>￥108</i>起<span>延庆</span></p>
           </div>
         </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  methods: {}
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
