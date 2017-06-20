<template>
  <div class="container">
    <ul class="tabbar">
      <li style="padding: 0 20px;height: 60px;"><sidelist ref="sl"></sidelist></li>
      <li v-for="(item,index) in data" :key="index">
        {{item}}
        <div class="border"></div>
      </li>
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
    background: #2E2E2D;
  }

  ul.tabbar{
    display: inline-block;
    margin: 0 auto;
  }

  .tabbar li {
    position: relative;
    display: inline-block;
    font-size: 15px;
    padding: 20px 20px;
    vertical-align: middle;
    height: 100%;
  }

  li:hover {
    color: #05E4FF;
  }

  .border{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: #05E4FF;
    transition: all 0.3s;
  }

  li:hover .border{
    width: 100%;
  }
</style>

<script>
  import sidelist from '../components/sidelist.vue'

  export default {
      components:{
          sidelist
      },
    props: {
      data: {
        type: Array,
        default: function () {
          return ['李奥瑞克', '帕克', '德玛西亚', '蛤丝卡', '比利海灵顿', '新垣结衣']
        }
      }
    },
    methods: {},
  };
</script>

