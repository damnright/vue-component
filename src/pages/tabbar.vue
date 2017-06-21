<template>
<div class="wrapper">
  <p class="head">tabbar</p>
  <tabbar></tabbar>
  <div class="tip">
    <p class="tipTitle">Parameter：</p>
    <ul>
      <li>data:['李奥瑞克', '帕克', '德玛西亚', '蛤丝卡', '比利海灵顿', '新垣结衣']</li>
    </ul>
    <p class="tipTitle">Style：</p>
    <p>在组件中自行修改</p>
    <p class="tipTitle">Usage：</p>
    <p>直接用，改改样式</p>
  </div>
</div>
</template>

<style scoped>
  .wrapper {
    font: 24px PingFangSC-Regular, sans-serif;
  }

  .head {
    font-size: 28px;
    color: #B700FF;
    text-align: center;
  }

  .tip {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .tipTitle{
    color: #FF9103;
  }

  .tip li{
    display: inline-block;
    margin-right: 30px;
  }
</style>

<script>
  import tabbar from '../components/tabbar.vue'

  export default {
    components:{
        tabbar
    },
    data(){
        return {

        }
    },
  };
</script>

