<template>
    <div>
       <div class="header">
            <div class="header-left">
                <span class="iconfont">&#xe624;</span>
            </div>
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>
                输入城市游玩景点或主题
            </div>
            <div class="header-right">
                城市
                <span class="iconfont icon-city">&#xe64a;</span>
            </div>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
    @import '~@/assets/css/varibles.less';
    .header{
        width:100%;
        line-height:.86rem;
        display:flex;
        background-color:@bgColor;
        color:#ffffff;

        .header-left{
            width:.64rem;
            float: left;
            text-align:center;
        }

        .header-input{
            flex:1;
            background-color: #fff;
            height: .64rem;
            line-height:.64rem;
            margin-top:.12rem;
            padding:0 .1rem;
            color:#cccccc;
            border-radius:.1rem;
        }

        .header-right{
            width:1.24rem;
            float: right;
            text-align:center;

            .icon-city{
                font-size:.1rem;
            }
        }
    }
</style>
