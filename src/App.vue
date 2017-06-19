<template>
  <div id="app">
    <p @click="$router.push({name:'home'})">home</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
  p{
    font-size: 26px;
    margin-left: 20px;
    text-align: left;
    text-decoration: underline;
  }
</style>
