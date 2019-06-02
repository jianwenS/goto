<template>
  <div>
    <div v-for="(item, index) in textList" :key="index">
      <div class="detailListItem">
         <div class="mp-ticketype-ticket" @click="item.isshow = !item.isshow" :class="{ active: item.isshow }"></div>
         {{item.title}}
      </div>
      <div v-if="item.children" class="itemList" v-show="item.isshow">
        <detail-list :textList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    textList: Array
  },
  data () {
    return {}
  },
  methods: {
    aaa (isshow) {
      alert(111)
    }
  }
}
</script>
<style lang='less'>
  .detailListItem{
    overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
    text-indent: .4rem;
    .mp-ticketype-ticket {
        display: inline-block;
        position: absolute;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: .2rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
  }
  .itemList {
    padding-left:.3rem;
  }
</style>
