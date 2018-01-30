<template>
  <div class="wrapper">
    <p class="head">sidelist</p>
    <div style="background: #fff;height: 42px;font-size: 14px;margin-left:60px;">
      <sidelist></sidelist>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    font: 24px PingFangSC-Regular, sans-serif;
    text-align: left;
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
  import sidelist from '../components/sidelist.vue'

  export default {
    components: {
      sidelist,
    },
    data(){
      return {}
    },
    methods:{
    },
    mounted(){

    }
  };
</script>

