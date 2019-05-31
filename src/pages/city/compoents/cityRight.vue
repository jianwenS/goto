<template>
  <div>
    <ul class="cityRight" ref="cityRight">
      <li class="cityRightItem" :ref="item"  @touchstart="moveStart($event)" @touchmove="move($event)" @touchend="moveEnd" @click="parentLetter(item)" v-for="(item,index) of letter" :key="index" >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      cityMain: '',
      touchStatus: false,
      thatW: '',
      timer: null
    }
  },
  props: ['letterlist'],
  updated () {
    this.cityMain = this.$refs['cityRight'].offsetTop
    this.thatW = this.$refs['A'][0].clientHeight
  },
  computed: {
    letter () {
      const list = []
      for (let key in this.letterlist) {
        list.push(key)
      }
      return list
    }
  },
  methods: {
    moveStart (e) {
      this.touchStatus = true
    },
    move (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let index = Math.floor((e.changedTouches[0].clientY - this.cityMain) / this.thatW)
          if (!this.letter[index]) {
            return false
          }
          if (index >= 0 && index <= this.letter.length) {
            this.$emit('parentLetter', this.letter[index])
          }
        }, 17)
      }
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
