<template>
<div class="wrapper">
  <p class="head">tabbar</p>
  <tabbar></tabbar>
  <div class="tip">
    <p class="tipTitle">Parameter：</p>
    <ul>
      <li>menuName:'菜单名'</li>
      <li>sideList:[{text: '1',child: [{text: '11', child: [{text: '111'}, {text: '112'}], childExtra: '韩红听了想打人',}, {
        text: '12',child: [{text: '121'}]}, {text: '13'}],childExtra: '你妹的',},{text: '2',child: [{text: '21'}],childExtra: '嘟嘟',}]</li>
    </ul>
    <p class="tipTitle">Style：</p>
    <p>样式多变，在组件中自行修改</p>
    <p class="tipTitle">Usage：</p>
    <p>组件可单独使用，也可添加到tabbar中作为子元素，但必须靠屏幕左边。</p>
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

