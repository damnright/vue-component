<template>
  <div class="container">
    <ul class="tabbar" @mouseenter="ul=true" @mouseleave="ul=false">
      <li v-for="(item,index) in data" :key="index" ref="li" @mouseenter="hover(index)" @mouseleave="leave(index)">
        {{item}}
      </li>
      <div class="border" :style="{left:left+'px',width:width+'px',transitionProperty:tp}"></div>
    </ul>
  </div>
</template>

<style scoped>
  .container {
    background: #000;
    text-align: left;
    color: #fff;
    transition: background 0.3s;
    opacity: 0.8;
  }

  .container:hover {
    background: #1D1E1E;
  }

  ul.tabbar {
    position: relative;
    display: inline-block;
    margin: 0 auto;
  }

  .tabbar li {
    display: inline-block;
    font-size: 15px;
    padding: 20px 20px;
    vertical-align: middle;
    height: 100%;
  }

  .border {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: #05E4FF;
    transition-duration: 0.4s;
  }
</style>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: function () {
          return ['李奥瑞克', '帕克', '德玛西亚', '蛤丝卡', '比利海灵顿', '新垣结衣']
        }
      }
    },
    data(){
      return {
        ul: false,
        enter: false,
        left: 0,
        width: 0,
        tp: 'width',
      }
    },
    methods: {
      hover(index){
        let rectObj = this.$refs.li[index].getBoundingClientRect();
        this.tp = this.enter ? 'width' : 'all';
        [this.left, this.width] = [rectObj.left, rectObj.width];
      },
      leave(index){
        this.enter = false;
        this.width = 0;
      }
    },
    watch: {
      ul(){
        this.enter = true;
      }
    },
  };
</script>

