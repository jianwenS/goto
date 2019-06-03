<template>
  <div>
      <div class="header">
        <div class="leftfirst" v-show="isHeaderShow">
          <router-link tag="span" to="/">
            <span class="iconfont">&#xe624;</span>
          </router-link>
        </div>
        <div class="leftscend" :style="opcityStyle" v-show="!isHeaderShow">
          <router-link tag="span" to="/">
            <span class="iconfont">&#xe624;</span>
          </router-link>
          颐和园
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isHeaderShow: true,
      opcityStyle: {
        opcity: 0
      },
      timer: null
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        this.isHeaderShow = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opcityStyle = {opacity}
      } else {
        this.isHeaderShow = true
      }
      console.log()
    }
  },
  activated () {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    }, 17)
  },
  deactivated () {
    clearTimeout(this.timer)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang='less' scoped>
 .header{
    position: absolute;
    left:0;
    top:0;
    box-sizing:border-box;
    padding:.2rem;
    .leftfirst{
      background-color:#000;
      opacity:.5;
      border-radius:50%;
      padding:.13rem;
      display:inline-block;
      color:#fff;
    }
    .leftscend{
      position: fixed;
      z-index:10;
      left:0;
      width:100%;
      top:0;
      text-align:center;
      padding:.2rem;
      background-color:#00bcd4;
      color:#ffffff;
      .iconfont{
       float: left;
      }
    }
  }
</style>
