<template>
  <div class="container">
    <ul class="tabbar">
      <li v-for="(item,index) in data" :key="index" ref="li">
        {{item}}
      </li>
      <div class="border"></div>
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

  .border{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100px;
    background: #05E4FF;
    transition: all 1s;
  }

  ul:hover .border{
    transform: translateX(300px);
  }

  li:hover .border{
    width: 100%;
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
    methods: {},
    mounted(){
        console.log(this.$refs.li)
    },
  };
</script>

