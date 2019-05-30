<template>
  <div>
    <ul class="cityRight" @touchstart="moveStart" @touchmove="move" @touchend="moveEnd">
      <li class="cityRightItem" @click="parentLetter(index)" v-for="(item,index) of letterList" :key="index">{{index}}</li>
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
  props: ['letterList'],
  methods: {
    moveStart () {
      // console.log(1)
    },
    move () {
      // console.log(2)
    },
    moveEnd () {
      // console.log(3)
    },
    parentLetter (letter) {
      this.$emit('parentLetter', letter)
    }
  }
}
</script>
<style lang='less' socped>
    .cityRight{
      position: absolute;
      z-index:1;
      right:0;top:2rem;
      flex-direction: column;
      .cityRightItem{
        display:flex;
        justify-content:center;
        align-items:center;
        width:.4rem;
        height:.4rem;
      }
    }
</style>
