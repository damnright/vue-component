<template>
<div>
  <img src="../assets/logo.png" alt="vue-logo">
  <p class="title">rnmmp's vue components</p>
  <ul class="wrapper">
    <li class="item" v-for="(item,index) in itemList" :key="index" @click="$router.push({name:item.name})">
      {{item.name}}
    </li>
  </ul>
</div>
</template>

<style scoped>
  .title{
    font:32px PingFangSC-Semibold,sans-serif;
    color: #FF00D2;
  }

  li{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item{
    margin:6px 16px;
    font:24px PingFangSC-Semibold,sans-serif;
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
  }
</style>

<script>
  export default {
    data() {
      return {
        itemList: [{ name: 'tabbar' }, { name: 'sidelist' }],
      };
    },
  };
</script>

