<template>
  <div>
    <ul class="cityRight">
      <li class="cityRightItem" v-for="(item,index) of letterList" :key="index">{{index}}</li>
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
  methods: {}
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
